// JavaScript Code - Robust Consolidated Version
document.addEventListener('DOMContentLoaded', function() {
    // ========== GLOBAL CONFIGURATION ==========
    const CONFIG = {
        animation: {
            duration: 500,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        },
        breakpoints: {
            mobile: 768
        }
    };

    // ========== UTILITY FUNCTIONS ==========
    const utils = {
        // Check if element is in viewport
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Validate email
        validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

        // Validate URL
        validateURL: (url) => {
            try {
                new URL(url);
                return true;
            } catch (_) {
                return false;
            }
        },

        // Smooth scroll to element
        smoothScroll: (targetId) => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },

        // Debounce function for performance
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    // ========== NOTIFICATION SYSTEM ==========
    const notification = {
        show: (message, type = 'success') => {
            // Remove existing notifications
            document.querySelectorAll('.notification').forEach(notification => notification.remove());
            
            // Create new notification
            const notificationEl = document.createElement('div');
            notificationEl.className = `notification ${type}`;
            notificationEl.textContent = message;
            
            document.body.appendChild(notificationEl);
            
            // Animate in
            setTimeout(() => notificationEl.classList.add('show'), 100);
            
            // Remove after 5 seconds
            setTimeout(() => {
                notificationEl.classList.remove('show');
                setTimeout(() => notificationEl.remove(), 300);
            }, 5000);
        }
    };

    // ========== COUNTER ANIMATION SYSTEM ==========
    const counterAnimation = {
        elements: [],
        observer: null,

        init: function() {
            this.elements = document.querySelectorAll('.percentage, .result-number, .stat-number');
            this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
                threshold: 0.1
            });
            
            this.elements.forEach(el => this.observer.observe(el));
        },

        handleIntersection: function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    this.animateCounter(entry.target);
                }
            });
        },

        animateCounter: function(element) {
            try {
                const targetValue = element.getAttribute('data-target');
                
                if (!targetValue) {
                    console.warn('Missing data-target attribute for element:', element);
                    return;
                }

                let target, symbol = '';
                
                // Handle symbols in target value
                if (targetValue.includes('%')) {
                    target = parseInt(targetValue.replace('%', ''));
                    symbol = '%';
                } else if (targetValue.includes('+')) {
                    target = parseInt(targetValue.replace('+', ''));
                    symbol = '+';
                } else {
                    target = parseInt(targetValue);
                }

                if (isNaN(target)) {
                    console.warn('Invalid data-target value:', targetValue);
                    return;
                }

                const duration = 2000;
                const step = Math.max(target / (duration / 16), 1);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        element.textContent = symbol ? target + symbol : target.toString();
                    } else {
                        element.textContent = symbol ? Math.floor(current) + symbol : Math.floor(current).toString();
                    }
                }, 16);

                element.classList.add('animated');
            } catch (error) {
                console.error('Error animating counter:', error);
            }
        }
    };

    // ========== SCROLL ANIMATION SYSTEM ==========
    const scrollAnimation = {
        observer: null,
        animatedSelectors: [
            '.expertise-card', '.case-study', '.testimonial', '.reason', 
            '.blog-card', '.service-card', '.process-step', '.result-card', 
            '.benefit', '.srilanka-feature', '.advantage-card', '.approach-item',
            '.feature', '.benefit-card', '.capability', '.offering-item',
            '.timeline-item', '.story-item', '.implementation-step',
            '.seo-solution-card', '.solution-feature', '.strategy-item' // Added SEO solutions elements
        ],

        init: function() {
            this.observer = new IntersectionObserver(this.handleIntersection.bind(this), CONFIG.animation);
            this.setupElements();
            
            // Special handling for SEO solutions section with staggered animation
            this.setupSEOSolutionsAnimation();
        },

        setupElements: function() {
            this.animatedSelectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = `opacity ${CONFIG.animation.duration}ms ease, transform ${CONFIG.animation.duration}ms ease`;
                    this.observer.observe(el);
                });
            });
        },

        handleIntersection: function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },

        // Special setup for SEO solutions section
        setupSEOSolutionsAnimation: function() {
            const seoSolutionsSection = document.querySelector('.seo-solutions');
            if (!seoSolutionsSection) return;

            const solutionCards = seoSolutionsSection.querySelectorAll('.seo-solution-card');
            const solutionFeatures = seoSolutionsSection.querySelectorAll('.solution-feature');
            const strategyItems = seoSolutionsSection.querySelectorAll('.strategy-item');

            // Apply staggered animation to SEO solution cards
            this.staggerAnimation(solutionCards, 150);
            
            // Apply staggered animation to solution features
            this.staggerAnimation(solutionFeatures, 100);
            
            // Apply staggered animation to strategy items
            this.staggerAnimation(strategyItems, 120);
        },

        // Staggered animation for groups
        staggerAnimation: function(elements, delay = 100) {
            elements.forEach((el, index) => {
                el.style.transitionDelay = `${index * delay}ms`;
            });
        }
    };

    // ========== MOBILE MENU SYSTEM ==========
    const mobileMenu = {
        hamburger: null,
        navLinks: null,
        body: null,
        isOpen: false,

        init: function() {
            this.hamburger = document.querySelector('.hamburger');
            this.navLinks = document.querySelector('.nav-links');
            this.body = document.body;

            if (!this.hamburger || !this.navLinks) return;

            this.setupEventListeners();
        },

        setupEventListeners: function() {
            // Hamburger click
            this.hamburger.addEventListener('click', this.toggle.bind(this));

            // Close when clicking on links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', this.close.bind(this));
            });

            // Close when clicking outside
            document.addEventListener('click', (event) => {
                const isClickInsideNav = this.navLinks.contains(event.target);
                const isClickOnHamburger = this.hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && this.isOpen) {
                    this.close();
                }
            });

            // Close on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Close on window resize
            window.addEventListener('resize', utils.debounce(() => {
                if (window.innerWidth > CONFIG.breakpoints.mobile && this.isOpen) {
                    this.close();
                }
            }, 250));
        },

        toggle: function() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        open: function() {
            this.hamburger.classList.add('active');
            this.navLinks.classList.add('active');
            this.body.classList.add('menu-open');
            this.isOpen = true;
        },

        close: function() {
            this.hamburger.classList.remove('active');
            this.navLinks.classList.remove('active');
            this.body.classList.remove('menu-open');
            this.isOpen = false;
        }
    };

    // ========== FORM HANDLING SYSTEM ==========
    const formHandler = {
        forms: {},

        init: function() {
            this.setupForms();
            this.setupFormValidation();
        },

        setupForms: function() {
            // SEO Audit Form
            this.forms.seoAudit = document.getElementById('seo-audit-form');
            if (this.forms.seoAudit) {
                this.forms.seoAudit.addEventListener('submit', (e) => this.handleFormSubmit(e, 'seo-audit'));
            }

            // AI Consultation Form
            this.forms.aiConsultation = document.getElementById('ai-seo-consultation-form');
            if (this.forms.aiConsultation) {
                this.forms.aiConsultation.addEventListener('submit', (e) => this.handleFormSubmit(e, 'ai-consultation'));
            }

            // WordPress Consultation Form
            this.forms.wordpressConsultation = document.getElementById('wordpress-consultation-form');
            if (this.forms.wordpressConsultation) {
                this.forms.wordpressConsultation.addEventListener('submit', (e) => this.handleFormSubmit(e, 'wordpress-consultation'));
            }
        },

        setupFormValidation: function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearFieldError(input));
                });
            });
        },

        validateField: function(field) {
            if (field.value.trim() === '' && field.hasAttribute('required')) {
                field.classList.add('error');
                return false;
            }

            if (field.type === 'email' && field.value.trim() !== '' && !utils.validateEmail(field.value)) {
                field.classList.add('error');
                return false;
            }

            if (field.type === 'url' && field.value.trim() !== '' && !utils.validateURL(field.value)) {
                field.classList.add('error');
                return false;
            }

            field.classList.remove('error');
            return true;
        },

        clearFieldError: function(field) {
            if (field.value.trim() !== '') {
                field.classList.remove('error');
            }
        },

        handleFormSubmit: function(e, formType) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            
            // Validate all fields
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                notification.show('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                const successMessages = {
                    'seo-audit': 'Thank you! Your SEO audit request has been received.',
                    'ai-consultation': 'Thank you! Your AI SEO audit request has been received.',
                    'wordpress-consultation': 'Thank you! Your WordPress consultation request has been received.'
                };

                notification.show(successMessages[formType] + ' We\'ll contact you within 24 hours.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': `AW-YOUR_CONVERSION_ID/${formType}_request`,
                        'value': 1.0,
                        'currency': 'USD'
                    });
                }
            }, 2000);
        }
    };

    // ========== INTERACTIVE COMPONENTS ==========
    const interactiveComponents = {
        init: function() {
            this.setupFAQ();
            this.setupHoverEffects();
            this.setupSmoothScrolling();
            this.setupCaseStudyFilters();
            this.setupActiveNavigation();
            this.setupSEOSolutionsInteractions(); // Added SEO solutions interactions
        },

        setupFAQ: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if(otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        },

        setupHoverEffects: function() {
            // Buttons
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => button.style.transform = 'translateY(-3px)');
                button.addEventListener('mouseleave', () => button.style.transform = 'translateY(0)');
            });

            // Cards - including SEO solution cards
            const cards = document.querySelectorAll('.service-card, .advantage-card, .case-study, .benefit-card, .seo-solution-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Solution features
            const solutionFeatures = document.querySelectorAll('.solution-feature');
            solutionFeatures.forEach(feature => {
                feature.addEventListener('mouseenter', () => {
                    feature.style.transform = 'translateY(-5px)';
                });
                feature.addEventListener('mouseleave', () => {
                    feature.style.transform = 'translateY(0)';
                });
            });
        },

        setupSmoothScrolling: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        utils.smoothScroll(targetId);
                    }
                });
            });
        },

        setupCaseStudyFilters: function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const caseStudyItems = document.querySelectorAll('.case-study');

            if (filterButtons.length === 0) return;

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Filter items
                    const filterValue = this.getAttribute('data-filter');
                    caseStudyItems.forEach(item => {
                        if (filterValue === 'all') {
                            item.style.display = 'block';
                        } else {
                            const categories = item.getAttribute('data-category').split(' ');
                            item.style.display = categories.includes(filterValue) ? 'block' : 'none';
                        }
                    });
                });
            });
        },

        setupActiveNavigation: function() {
            const currentPage = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        },

        // SEO Solutions specific interactions
        setupSEOSolutionsInteractions: function() {
            const solutionCards = document.querySelectorAll('.seo-solution-card');
            
            solutionCards.forEach(card => {
                // Add click effect for solution cards
                card.addEventListener('click', function() {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });

                // Add icon animation on hover
                const icon = card.querySelector('.solution-icon');
                if (icon) {
                    card.addEventListener('mouseenter', () => {
                        icon.style.transform = 'rotate(10deg) scale(1.1)';
                    });
                    card.addEventListener('mouseleave', () => {
                        icon.style.transform = 'rotate(0) scale(1)';
                    });
                }
            });

            // Strategy items interaction
            const strategyItems = document.querySelectorAll('.strategy-item');
            strategyItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    const number = this.querySelector('.strategy-number');
                    if (number) {
                        number.style.transform = 'scale(1.2)';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    const number = this.querySelector('.strategy-number');
                    if (number) {
                        number.style.transform = 'scale(1)';
                    }
                });
            });
        }
    };

    // ========== PAGE SPECIFIC FUNCTIONALITY ==========
    const pageSpecific = {
        init: function() {
            this.setupHeroAnimations();
            this.setupHeaderScroll();
            this.setupPageLoad();
            this.setupSEOSolutionsSection(); // Added SEO solutions setup
        },

        setupHeroAnimations: function() {
            const heroContent = document.querySelector('.hero-content');
            const seoHeroContent = document.querySelector('.seo-hero-text');
            
            [heroContent, seoHeroContent].forEach(element => {
                if (element) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(30px)';
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 300);
                }
            });
        },

        setupHeaderScroll: function() {
            window.addEventListener('scroll', utils.debounce(() => {
                const header = document.querySelector('header');
                if (header) {
                    header.classList.toggle('scrolled', window.scrollY > 50);
                }
            }, 10));
        },

        setupPageLoad: function() {
            window.addEventListener('load', () => {
                document.body.classList.add('loaded');
            });
        },

        // SEO Solutions section specific setup
        setupSEOSolutionsSection: function() {
            const seoSolutionsSection = document.querySelector('.seo-solutions');
            if (!seoSolutionsSection) return;

            // Add intersection observer for the entire section
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        
                        // Trigger counter animations if any in this section
                        const counters = entry.target.querySelectorAll('.percentage, .stat-number');
                        counters.forEach(counter => {
                            if (!counter.classList.contains('animated')) {
                                counterAnimation.animateCounter(counter);
                            }
                        });
                    }
                });
            }, { threshold: 0.2 });

            sectionObserver.observe(seoSolutionsSection);
        }
    };

    // ========== INITIALIZE ALL SYSTEMS ==========
    function initializeAll() {
        mobileMenu.init();
        scrollAnimation.init();
        counterAnimation.init();
        formHandler.init();
        interactiveComponents.init();
        pageSpecific.init();

        // Apply staggered animations to specific element groups
        const staggeredElements = [
            '.advantage-card',
            '.service-card', 
            '.process-step',
            '.benefit-card',
            '.offering-item',
            '.seo-solution-card', // Added SEO solution cards
            '.solution-feature',  // Added solution features
            '.strategy-item'      // Added strategy items
        ];

        staggeredElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                scrollAnimation.staggerAnimation(elements, 100);
            }
        });
    }

    // Start everything
    initializeAll();
});

// Add global styles including SEO solutions specific styles
const globalStyles = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        background-color: #10b981;
    }
    
    .notification.error {
        background-color: #ef4444;
    }
    
    form input.error,
    form select.error,
    form textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
    
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    
    /* SEO Solutions specific animations */
    .seo-solution-card {
        transition: all 0.3s ease;
    }
    
    .solution-icon {
        transition: transform 0.3s ease;
    }
    
    .strategy-number {
        transition: transform 0.3s ease;
    }
    
    .solution-feature {
        transition: all 0.3s ease;
    }
    
    /* Mobile case study expand/collapse */
    @media (max-width: 768px) {
        .challenge-solution {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .seo-case-study.expanded .challenge-solution {
            max-height: 1000px;
        }
        
        .case-study-results {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .seo-case-study.expanded .case-study-results {
            opacity: 1;
        }
    }
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);
