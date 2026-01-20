import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createTransport } from "npm:nodemailer@6.9.7"

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LeadRecord {
    type: string;
    email: string;
    name?: string;
    phone?: string;
    address?: string;
    message?: string;
    metadata?: Record<string, any>;
    attachments?: string[];
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const payload = await req.json()
        const record: LeadRecord = payload.record

        if (!record || !record.email) {
            return new Response("No email in record", { status: 400 })
        }

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: 'info@luxht.com',
                pass: 'tgoe rjmy reoo yzbg'
            }
        })

        // --- Dynamic Content Logic ---

        let subject = 'Message Received - LUXHT';
        let headline = 'Thank You for Reaching Out';
        let bodyText = `We have received your message and appreciate you contacting LUXHT. Our team will review your inquiry and get back to you shortly.`;

        switch (record.type) {
            case 'quick_cash':
                subject = 'Your Cash Offer Request - LUXHT';
                headline = 'Offer Request Received';
                bodyText = `We have received your property details for <strong>${record.address || 'your home'}</strong>. Our acquisition team is currently analyzing the market data and will reach out to you shortly (usually within 24 hours) with your fair cash offer.`;
                break;

            case 'application':
                subject = 'Application Received - LUXHT';
                headline = 'Application Received';
                bodyText = `Thank you for your interest in joining the LUXHT team. We have received your application for the <strong>${record.metadata?.position || 'open position'}</strong>. We are currently reviewing your qualifications and will contact you if your profile matches our needs.`;
                break;

            case 'discovery':
                subject = 'Project Consultation - LUXHT';
                headline = 'Consultation Request Confirmed';
                bodyText = `Thank you for choosing LUXHT for your upcoming project. We have received your consultation request. A project manager will contact you soon to coordinate a time to discuss your vision in detail.`;
                break;

            default:
                // Keep default values
                break;
        }

        // --- Styling Constants ---
        // Using Dark Charcoal for a premium look, replacing the old gold.
        const primaryColor = '#1a1a1a';
        const accentColor = '#333333';
        const backgroundColor = '#f4f4f5';

        // --- Templates ---

        // Email 1: To User
        const userMailOptions = {
            from: '"LUXHT" <info@luxht.com>',
            to: record.email,
            subject: subject,
            html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: ${backgroundColor};">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding: 40px 0; text-align: center;">
                <!-- Container -->
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                  
                  <!-- Header / Logo Area -->
                  <tr>
                    <td style="padding: 40px 40px 30px 40px; text-align: center; border-bottom: 1px solid #eeeeee;">
                       <!-- Logo with Fallback -->
                       <img src="https://luxht.com/assets/logo.png" alt="LUXHT" style="max-height: 50px; display: block; margin: 0 auto; color: ${primaryColor}; font-size: 24px; font-weight: bold; letter-spacing: 2px;">
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: ${primaryColor}; margin: 0 0 20px 0; font-size: 24px; font-weight: 300; letter-spacing: -0.5px;">${headline}</h2>
                      <p style="color: ${accentColor}; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Dear ${record.name || 'Client'},
                      </p>
                      <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0;">
                        ${bodyText}
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
                      <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: 500;">LUXHT</p>
                      <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 12px;">Luxury Home Transformation | Central Florida</p>
                      <p style="color: #9ca3af; margin: 20px 0 0 0; font-size: 11px;">
                        <a href="https://luxht.com" style="color: #ffffff; text-decoration: none;">Visit Website</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
        }

        // Email 2: To Admin (Info)
        const adminMailOptions = {
            from: '"LUXHT Notifications" <info@luxht.com>',
            to: 'info@luxht.com',
            subject: `[New Lead] ${record.type?.toUpperCase()} - ${record.name}`,
            html: `
        <div style="font-family: monospace; color: #333;">
          <h2>New Lead Captured</h2>
          <ul>
            <li><strong>Type:</strong> ${record.type}</li>
            <li><strong>Name:</strong> ${record.name}</li>
            <li><strong>Email:</strong> ${record.email}</li>
            <li><strong>Phone:</strong> ${record.phone}</li>
            <li><strong>Address:</strong> ${record.address}</li>
          </ul>
          <h3>Message</h3>
          <pre style="background: #eee; padding: 10px;">${record.message}</pre>
          <h3>Metadata</h3>
          <pre>${JSON.stringify(record.metadata, null, 2)}</pre>
        </div>
      `
        }

        // Send emails
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions)
        ])

        return new Response(JSON.stringify({ message: "Emails sent successfully" }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
        })

    } catch (error) {
        console.error("Error:", error)
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500,
        })
    }
})
