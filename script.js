document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Simple mobile menu styles injection if active
            if (nav.classList.contains('active')) {
                Object.assign(nav.style, {
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                });

                const ul = nav.querySelector('ul');
                Object.assign(ul.style, {
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                });
            } else {
                nav.style = '';
                const ul = nav.querySelector('ul');
                if (ul) ul.style = '';
            }
        });
    }

    // Form Submission Handling
    const form = document.getElementById('vipForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Prepare template parameters (if needed, but sendForm handles inputs automatically)
            // ensuring input names match template variables: name, email, phone, message

            const serviceID = 'service_plo1wic';
            const templateID = 'template_56nu08u'; // Contact Us
            const autoReplyTemplateID = 'template_so4czsy'; // Auto-Reply

            // Send both emails in parallel
            Promise.all([
                emailjs.sendForm(serviceID, templateID, form),
                emailjs.sendForm(serviceID, autoReplyTemplateID, form)
            ])
                .then(() => {
                    // Success
                    const modal = document.getElementById('success-modal');
                    const closeBtn = modal.querySelector('.modal-close');
                    const actionBtn = modal.querySelector('.modal-action-btn');

                    if (modal) {
                        modal.classList.add('open');
                        modal.setAttribute('aria-hidden', 'false');

                        const closeModal = () => {
                            modal.classList.remove('open');
                            modal.setAttribute('aria-hidden', 'true');
                            document.body.classList.remove('no-scroll');
                        };

                        document.body.classList.add('no-scroll');

                        // Close events
                        closeBtn.addEventListener('click', closeModal);
                        actionBtn.addEventListener('click', closeModal);
                        modal.addEventListener('click', (e) => {
                            if (e.target === modal) closeModal();
                        });
                    } else {
                        alert('Thank you! Your message has been sent.');
                    }

                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, (err) => {
                    // Error
                    btn.innerText = originalText;
                    btn.disabled = false;
                    alert('Failed to send message. Please try again later or email us directly.');
                    console.error('EmailJS Error:', err);
                });
        });
    }

    // Hero Slideshow
    const slides = document.querySelectorAll('.hero-slideshow img');
    const dotsContainer = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        const intervalTime = 5000; // 5 seconds

        // Initialize dots
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('slide-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
        }

        const dots = document.querySelectorAll('.slide-dot');

        function updateSlides() {
            // Update Images
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlide].classList.add('active');

            // Update Dots
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Event Listeners for Arrows
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        // Start Auto Play
        startInterval();
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .card, .info-item, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        // Only apply manual offset/opacity to legacy elements. 
        // New elements (.slide-in-*) handle this via CSS.
        if (el.matches('.fade-in, .card, .info-item')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
        observer.observe(el);
    });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});
