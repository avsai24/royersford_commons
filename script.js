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

            // Simulate API call
            setTimeout(() => {
                // Show Success Modal
                const modal = document.getElementById('success-modal');
                const closeBtn = modal.querySelector('.modal-close');
                const actionBtn = modal.querySelector('.modal-action-btn');

                if (modal) {
                    modal.classList.add('open');
                    modal.setAttribute('aria-hidden', 'false');

                    const closeModal = () => {
                        modal.classList.remove('open');
                        modal.setAttribute('aria-hidden', 'true');
                    };

                    // Close events
                    closeBtn.addEventListener('click', closeModal);
                    actionBtn.addEventListener('click', closeModal);
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) closeModal();
                    });
                } else {
                    // Fallback if modal is missing (should vary rarely happen)
                    alert('Thank you for your interest! You have been added to our VIP list.');
                }

                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1000);
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

    document.querySelectorAll('.fade-in, .card, .info-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
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
