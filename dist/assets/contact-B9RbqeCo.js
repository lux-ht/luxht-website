import"./main-D9CxFDMg.js";import{_ as i}from"./preload-helper-D7HrI6pR.js";function c(){const e=document.createElement("style");e.textContent=`
    .page-hero {
      padding: 180px 0 80px;
    }
    
    .page-hero-content h1 {
      margin: var(--space-4) 0 var(--space-6);
    }
    
    .page-hero-content .lead {
      text-align: center;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .contact-grid {
      align-items: start;
    }
    
    .contact-form-wrapper {
      padding: var(--space-10);
    }
    
    .contact-form-wrapper h3 {
      margin-bottom: var(--space-8);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
    }
    
    .form-group {
      margin-bottom: var(--space-5);
    }
    
    .form-group label {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      margin-bottom: var(--space-2);
    }
    
    .form-group select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right var(--space-4) center;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .contact-info {
      padding: var(--space-4);
    }
    
    .info-block h3 {
      margin-bottom: var(--space-6);
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    
    .info-label {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
    }
    
    .info-item p,
    .info-item a {
      font-size: var(--text-base);
      color: var(--text-secondary);
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .hours-item {
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .contact-grid {
        gap: var(--space-10);
      }
    }
  `,document.head.appendChild(e)}function m(){const e=document.getElementById("contact-form");e&&(i(()=>import("./address-autocomplete-Bi6y3Hjl.js"),[]).then(a=>{a.initAddressAutocomplete("address")}).catch(a=>console.error("Failed to load autocomplete",a)),e.addEventListener("submit",async a=>{a.preventDefault();const o=e.querySelector('button[type="submit"]'),d=o.textContent;o.textContent="Sending...",o.disabled=!0;const p=new FormData(e),t=Object.fromEntries(p);try{const{supabase:n}=await i(async()=>{const{supabase:r}=await import("./supa-client-DO3dAMz_.js");return{supabase:r}},[]),{error:s}=await n.from("leads").insert({type:"contact",name:`${t.firstName} ${t.lastName}`,email:t.email,address:t.address,phone:t.phone,message:t.message,metadata:{project_type:t.project}});if(s)throw s;i(async()=>{const{showSuccessModal:r}=await import("./modal-CWM_dJ3p.js");return{showSuccessModal:r}},[]).then(({showSuccessModal:r})=>{r("Message Sent","Thank you for contacting LUXHT. We have received your message and will be in touch shortly.",()=>{e.reset()})})}catch(n){console.error("Error submitting form:",n),alert("Failed to send message. Please try again or email us directly.")}finally{o.textContent=d,o.disabled=!1}}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{c(),m()}):(c(),m());
