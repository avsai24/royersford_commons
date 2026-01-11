// Enhanced Availability Data with Detailed Unit Information
const availabilityData = {
    'junior-1-bed': {
        floorPlanImage: 'images/Junior 1 Bed Apartments.webp',
        beds: 0,
        baths: 1,
        units: [
            {
                unit: '318',
                floor: 3,
                sqft: 692,
                rent: 1795,
                available: 'Now',
                status: 'available',
                petFriendly: true,
                description: 'We proudly offer discounted utilities and amenities including water, sewer, concierge trash, high-speed Internet, parking, and gym membership.',
                amenities: ['Elevator', 'Dishwasher', 'Microwave', 'Refrigerator', 'Dryer', 'Range', 'Washer'],
                appliances: [], // Merged into amenities per user format, can separate if needed
                pricing: {
                    baseRent: 1795,
                    bundle: 195,
                    petRent: 40,
                    petDeposit: 250
                },
                buildingInfoOverride: [
                    'Building-wide Wireless',
                    'Concierge',
                    'Discounted Amenity & Utility Bundle',
                    'Granite Counters',
                    'Heating: Heat pump',
                    'High Speed Wifi Internet',
                    'High-speed Internet Ready',
                    'Internet included in rent',
                    'Lawn',
                    'New Construction',
                    'One Year Lease',
                    'Online Maintenance Portal',
                    'Online Rent Payment',
                    'Permit parking is available in our private off street parking lot. One free spot is available per bedroom in your apartment.',
                    'Pet Friendly',
                    'Private Parking Lot',
                    'Sewage not included in rent',
                    'Stainless Appliances',
                    'Water not included in rent'
                ]
            }
        ]
    },
    '1-bed': {
        floorPlanImage: 'images/1 Bed Apartments .webp',
        beds: 1,
        baths: 1,
        units: [
            {
                unit: '312',
                floor: 3,
                sqft: 793,
                rent: 1845,
                available: 'Now',
                status: 'available',
                petFriendly: true,
                description: 'We proudly offer discounted utilities and amenities including water, sewer, concierge trash, high-speed Internet, parking, and gym membership.',
                amenities: ['Elevator', 'Dishwasher', 'Microwave', 'Refrigerator', 'Dryer', 'Range', 'Washer'],
                appliances: [],
                pricing: {
                    baseRent: 1845,
                    bundle: 195,
                    petRent: 40,
                    petDeposit: 250
                },
                buildingInfoOverride: [
                    'Building-wide Wireless',
                    'Concierge',
                    'Discounted Amenity & Utility Bundle',
                    'Granite Counters',
                    'Heating: Heat pump',
                    'High Speed Wifi Internet',
                    'High-speed Internet Ready',
                    'Internet included in rent',
                    'Lawn',
                    'New Construction',
                    'One Year Lease',
                    'Online Maintenance Portal',
                    'Online Rent Payment',
                    'Permit parking is available in our private off street parking lot. One free spot is available per bedroom in your apartment.',
                    'Pet Friendly',
                    'Private Parking Lot',
                    'Sewage not included in rent',
                    'Stainless Appliances',
                    'Water not included in rent'
                ]
            }
        ]
    },
    '2-bed': {
        floorPlanImage: 'images/2 Beds:2 Baths.webp',
        images: [
            'images/2 Beds:2 Baths.webp', // Floor plan as first image
            'images/2bed/image1.webp',
            'images/2bed/image2.webp',
            'images/2bed/image3.webp',
            'images/2bed/image4.webp',
            'images/2bed/image5.webp',
            'images/2bed/image6.webp',
            'images/2bed/image7.webp',
            'images/2bed/image8.webp',
            'images/2bed/image9.webp',
            'images/2bed/image10.webp',
            'images/2bed/image11.webp',
            'images/2bed/image12.webp'
        ],
        beds: 2,
        baths: 2,
        units: [
            {
                unit: '321',
                floor: 3,
                sqft: 952,
                rent: 2395,
                available: 'Now',
                status: 'available',
                petFriendly: true,
                description: 'We proudly offer discounted utilities and amenities including water, sewer, concierge trash, high-speed Internet, parking, and gym membership.',
                amenities: ['Elevator', 'Dishwasher', 'Microwave', 'Refrigerator', 'Dryer', 'Range', 'Washer'],
                appliances: [],
                pricing: {
                    baseRent: 2395,
                    bundle: 195,
                    petRent: 40,
                    petDeposit: 250
                },
                buildingInfoOverride: [
                    'Building-wide Wireless',
                    'Concierge',
                    'Discounted Amenity & Utility Bundle',
                    'Granite Counters',
                    'Heating: Heat pump',
                    'High Speed Wifi Internet',
                    'High-speed Internet Ready',
                    'Internet included in rent',
                    'Lawn',
                    'New Construction',
                    'One Year Lease',
                    'Online Maintenance Portal',
                    'Online Rent Payment',
                    'Permit parking is available in our private off street parking lot. One free spot is available per bedroom in your apartment.',
                    'Pet Friendly',
                    'Private Parking Lot',
                    'Sewage not included in rent',
                    'Stainless Appliances',
                    'Water not included in rent'
                ]
            }
        ]
    }
};

// Building-wide information (same for all units)
const buildingInfo = {
    leaseTerms: [
        'Lease length: One year lease',
        'Security deposit: One month rent',
        'Application fee: $50 per applicant',
        'Pet deposit: $300 (if applicable)'
    ],
    buildingAmenities: [
        'Building-wide Wireless Internet',
        '24/7 Concierge Service',
        'Discounted Amenity & Utility Bundle',
        'Granite Counters',
        'Heating: Heat pump',
        'High Speed Wifi Internet',
        'Fitness Center',
        'Package Receiving',
        'Elevator Access',
        'On-site Parking'
    ]
};

// Availability Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const availabilityModal = document.getElementById('availability-modal');
    const unitDetailModal = document.getElementById('unit-detail-modal');
    const checkAvailabilityButtons = document.querySelectorAll('.btn-check-availability');

    if (!availabilityModal) return;

    let currentFloorPlanType = '';
    let currentFloorPlanName = '';

    // Function to open availability modal (unit grid)
    function openAvailabilityModal(floorPlanType, floorPlanName) {
        currentFloorPlanType = floorPlanType;
        currentFloorPlanName = floorPlanName;

        const floorPlanData = availabilityData[floorPlanType];
        if (!floorPlanData) return;

        const units = floorPlanData.units || [];

        // Update title
        document.getElementById('availability-title').textContent = `${floorPlanName} - Available Units`;
        document.getElementById('availability-subtitle').textContent = `${units.length} unit${units.length !== 1 ? 's' : ''} available`;

        // Clear and populate unit grid
        const unitGrid = document.getElementById('unit-grid');
        unitGrid.innerHTML = '';

        if (units.length === 0) {
            unitGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">
                    <p>No units currently available. Please check back soon!</p>
                </div>
            `;
        } else {
            units.forEach(unit => {
                const statusClass = `status-${unit.status}`;
                const statusText = unit.status.replace('-', ' ').toUpperCase();

                const card = document.createElement('div');
                card.className = 'unit-card';
                card.innerHTML = `
                    <div class="unit-card-header">
                        <h4>Unit #${unit.unit}</h4>
                        <span class="status-badge ${statusClass}">${statusText}</span>
                    </div>
                    <div class="unit-card-body">
                        <div class="unit-info-row">
                            <span class="label">Floor:</span>
                            <span class="value">${unit.floor}</span>
                        </div>
                        <div class="unit-info-row">
                            <span class="label">Size:</span>
                            <span class="value">${unit.sqft.toLocaleString()} sq ft</span>
                        </div>
                        <div class="unit-info-row">
                            <span class="label">Rent:</span>
                            <span class="value price">$${unit.rent.toLocaleString()}/mo</span>
                        </div>
                        <div class="unit-info-row">
                            <span class="label">Available:</span>
                            <span class="value">${unit.available}</span>
                        </div>
                    </div>
                    <button class="btn-primary full-width view-details-btn" data-unit="${unit.unit}">View Details</button>
                `;

                // Add click handler for "View Details"
                card.querySelector('.view-details-btn').addEventListener('click', () => {
                    openUnitDetailModal(unit, floorPlanData, floorPlanName);
                });

                unitGrid.appendChild(card);
            });
        }

        // Show modal
        availabilityModal.classList.add('open');
        availabilityModal.setAttribute('aria-hidden', 'false');
    }

    // Function to open unit detail modal
    function openUnitDetailModal(unit, floorPlanData, floorPlanName) {
        // Close availability modal first
        closeAvailabilityModal();

        // Populate unit detail modal
        document.getElementById('unit-detail-number').textContent = `Unit ${unit.unit}`;

        const bedsText = floorPlanData.beds === 0 ? 'Studio' : `${floorPlanData.beds} bed`;
        document.getElementById('unit-detail-specs').textContent = `${bedsText}, ${floorPlanData.baths} bath | $${unit.rent.toLocaleString()}`;
        document.getElementById('unit-detail-disclaimer').textContent = 'Price may not include required fees and charges';

        // Vertical Gallery Logic
        const galleryContainer = document.querySelector('.gallery-container');

        // Reset (Clear existing content inside gallery container)
        galleryContainer.innerHTML = '';

        // Use images array if available, otherwise just floor plan
        const images = floorPlanData.images || [floorPlanData.floorPlanImage];

        images.forEach((imgSrc, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-image-wrapper';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${floorPlanName} Image ${index + 1}`;
            img.loading = index > 2 ? 'lazy' : 'eager'; // Optimization

            wrapper.appendChild(img);
            galleryContainer.appendChild(wrapper);
        });

        // Hide specific slideshow elements if they exist independently (cleanup)
        // The previous code expected specific IDs, we are now replacing the whole container content.

        // Amenities
        const amenitiesList = document.getElementById('unit-amenities-list');
        amenitiesList.innerHTML = unit.amenities.map(amenity => `
            <div class="amenity-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${amenity}</span>
            </div>
        `).join('');

        // Description
        document.getElementById('unit-description').textContent = unit.description;

        // Appliances
        const appliancesList = document.getElementById('unit-appliances-list');
        appliancesList.innerHTML = unit.appliances.map(appliance => `
            <span class="appliance-tag">${appliance}</span>
        `).join('');

        // Lease terms
        const leaseTermsList = document.getElementById('lease-terms-list');
        leaseTermsList.innerHTML = buildingInfo.leaseTerms.map(term => `<li>${term}</li>`).join('');

        // Building info
        const buildingInfoList = document.getElementById('building-info-list');
        const buildingAmenities = unit.buildingInfoOverride || buildingInfo.buildingAmenities;
        buildingInfoList.innerHTML = buildingAmenities.map(amenity => `<li>${amenity}</li>`).join('');

        // Estimate your total section
        const pricingSection = document.getElementById('pricing-breakdown-section');
        if (unit.pricing) {
            const totalMonthly = unit.pricing.baseRent + unit.pricing.bundle + unit.pricing.petRent;
            const petDeposit = unit.pricing.petDeposit;

            pricingSection.innerHTML = `
                <div class="pricing-calculator">
                    <h3>Estimate your total</h3>
                    
                    <div class="pricing-group">
                        <h4>Monthly rent, fees & charges</h4>
                        
                        <div class="pricing-row required-header">
                            <span>Required</span>
                        </div>
                        
                        <div class="pricing-row">
                            <span>Monthly base rent</span>
                            <span class="price">$${unit.pricing.baseRent.toLocaleString()}</span>
                        </div>
                        
                        <div class="pricing-row">
                            <span>Amenity & Utilities Discount Bundle (required)</span>
                            <span class="price">$${unit.pricing.bundle}</span>
                        </div>
                        
                        <div class="pricing-row">
                            <span>Pet rent</span>
                            <span class="price">$${unit.pricing.petRent}</span>
                        </div>
                        
                        <div class="pricing-row optional-header">
                            <span>Optional</span>
                        </div>
                        
                        <div class="pricing-row total-row">
                            <span>Estimated monthly total</span>
                            <span class="price total">$${totalMonthly.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div class="pricing-group">
                        <h4>One-time fees & charges</h4>
                        
                        <div class="pricing-row required-header">
                            <span>Required</span>
                        </div>
                        
                        <div class="pricing-row">
                            <span>Pet deposit</span>
                            <span class="price">$${petDeposit}</span>
                        </div>
                        <div class="pricing-note">Not refundable</div>
                        
                        <div class="pricing-row optional-header">
                            <span>Optional</span>
                        </div>
                        
                        <div class="pricing-row total-row">
                            <span>Estimated total</span>
                            <span class="price total">$${petDeposit}</span>
                        </div>
                    </div>
                    
                    <p class="pricing-disclaimer">Displayed pricing may not reflect all required, optional or variable usage-based fees. For more details, please contact the property directly.</p>
                </div>
            `;
            pricingSection.style.display = 'block';
        } else {
            pricingSection.style.display = 'none';
        }

        // Show modal
        unitDetailModal.classList.add('open');
        unitDetailModal.setAttribute('aria-hidden', 'false');
    }

    // Function to close availability modal
    function closeAvailabilityModal() {
        availabilityModal.classList.remove('open');
        availabilityModal.setAttribute('aria-hidden', 'true');
    }

    // Function to close unit detail modal
    function closeUnitDetailModal() {
        unitDetailModal.classList.remove('open');
        unitDetailModal.setAttribute('aria-hidden', 'true');
    }

    // Attach event listeners to Check Availability buttons
    checkAvailabilityButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const floorPlanType = button.getAttribute('data-floorplan');
            const floorPlanName = button.getAttribute('data-floorplan-name');
            openAvailabilityModal(floorPlanType, floorPlanName);
        });
    });

    // Close buttons for availability modal
    const availabilityCloseBtn = availabilityModal.querySelector('.modal-close');
    const availabilityBackBtn = document.getElementById('back-to-listing');

    if (availabilityCloseBtn) {
        availabilityCloseBtn.addEventListener('click', closeAvailabilityModal);
    }

    if (availabilityBackBtn) {
        availabilityBackBtn.addEventListener('click', () => {
            closeUnitDetailModal();
            openAvailabilityModal(currentFloorPlanType, currentFloorPlanName);
        });
    }

    // Close buttons for unit detail modal
    const unitDetailCloseBtn = unitDetailModal?.querySelector('.modal-close');
    const requestTourBtn = document.getElementById('request-tour-btn');
    const requestApplyBtn = document.getElementById('request-apply-btn');

    if (unitDetailCloseBtn) {
        unitDetailCloseBtn.addEventListener('click', closeUnitDetailModal);
    }

    if (requestTourBtn) {
        requestTourBtn.addEventListener('click', () => {
            closeUnitDetailModal();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (requestApplyBtn) {
        requestApplyBtn.addEventListener('click', () => {
            closeUnitDetailModal();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close on overlay click
    availabilityModal.addEventListener('click', (e) => {
        if (e.target === availabilityModal) {
            closeAvailabilityModal();
        }
    });

    if (unitDetailModal) {
        unitDetailModal.addEventListener('click', (e) => {
            if (e.target === unitDetailModal) {
                closeUnitDetailModal();
            }
        });
    }
});
