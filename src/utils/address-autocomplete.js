/**
 * Address Autocomplete Utility
 * Service: OpenStreetMap Nominatim (Free, No Key)
 * Focus: Florida (Strict Bounding Box)
 * Features: House Number Preservation
 */

export function initAddressAutocomplete(inputElementId, onSelectCallback) {
    const input = document.getElementById(inputElementId);
    if (!input) return;

    // Create suggestions container
    const container = document.createElement('div');
    container.className = 'autocomplete-suggestions';
    Object.assign(container.style, {
        position: 'absolute',
        zIndex: '1000',
        background: 'white',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        width: `${input.offsetWidth}px`,
        maxHeight: '200px',
        overflowY: 'auto',
        display: 'none'
    });

    // Insert after input
    input.parentNode.style.position = 'relative';
    input.parentNode.insertBefore(container, input.nextSibling);

    let debounceTimer;

    // Input Event Listener
    input.addEventListener('input', (e) => {
        const query = e.target.value;
        clearTimeout(debounceTimer);

        if (query.length < 3) {
            container.style.display = 'none';
            return;
        }

        debounceTimer = setTimeout(() => fetchSuggestions(query), 300);
    });

    // Close on Outside Click
    document.addEventListener('click', (e) => {
        if (e.target !== input && e.target !== container) {
            container.style.display = 'none';
        }
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        container.style.width = `${input.offsetWidth}px`;
    });

    function fetchSuggestions(query) {
        // Florida Bounding Box (min_lon, min_lat, max_lon, max_lat)
        // Approximate to cover the state
        const viewbox = '-87.63,24.39,-79.97,31.00';

        const params = new URLSearchParams({
            q: query,
            format: 'json',
            addressdetails: 1,
            limit: 10,
            viewbox: viewbox,
            bounded: 1,
            countrycodes: 'us'
        });

        const url = `https://nominatim.openstreetmap.org/search?${params.toString()}`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => renderSuggestions(data, query))
            .catch(err => console.error('Address autocomplete error:', err));
    }

    function renderSuggestions(features, originalQuery) {
        container.innerHTML = '';

        if (!features || features.length === 0) {
            container.style.display = 'none';
            return;
        }

        // Logic to extract any leading house number from user input
        const numberMatch = originalQuery.trim().match(/^(\d+(?:[a-zA-Z])?)\s/);
        const queryHouseNumber = numberMatch ? numberMatch[1] : null;

        features.forEach(feature => {
            const addr = feature.address;
            const state = (addr.state || '').toLowerCase();

            // Double-check Strict Filtering (Client-side)
            if (state !== 'florida') return;

            // Construct Display Name
            let houseNumber = addr.house_number || '';
            let road = addr.road || '';
            let city = addr.city || addr.town || addr.village || addr.municipality || '';
            let postcode = addr.postcode || '';

            // If API didn't return a house number but user typed one, inject it
            if (!houseNumber && queryHouseNumber && road) {
                // Only if the result feels like a "street fallback" (highway, residential, etc.)
                // or if it's literally just the road name
                houseNumber = queryHouseNumber;
            }

            // Build Address Parts
            const parts = [];
            if (houseNumber && road) {
                parts.push(`${houseNumber} ${road}`);
            } else if (road) {
                parts.push(road);
            } else {
                parts.push(feature.display_name.split(',')[0]); // Fallback
            }

            if (city) parts.push(city);
            parts.push('FL'); // We know it's FL
            if (postcode) parts.push(postcode);

            const displayString = parts.join(', ');

            // Create DOM Item
            const item = document.createElement('div');
            item.textContent = displayString;
            Object.assign(item.style, {
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#333',
                borderBottom: '1px solid #eee'
            });

            item.addEventListener('mouseover', () => item.style.background = '#f9f9f9');
            item.addEventListener('mouseout', () => item.style.background = 'white');

            item.addEventListener('click', () => {
                input.value = displayString;
                container.style.display = 'none';
                if (onSelectCallback) {
                    onSelectCallback({
                        display_name: displayString,
                        lat: feature.lat,
                        lon: feature.lon,
                        address: {
                            house_number: houseNumber,
                            road: road,
                            city: city,
                            state: 'Florida',
                            postcode: postcode
                        }
                    });
                }
            });

            container.appendChild(item);
        });

        if (container.hasChildNodes()) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}
