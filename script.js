// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with improved functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // FAQ functionality - Enhanced for both homepage and SEO page
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

    // Add animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation - Expanded for SEO page elements
    const elementsToAnimate = document.querySelectorAll('.expertise-card, .case-study, .testimonial, .reason, .blog-card, .service-card, .process-step, .result-card, .benefit, .srilanka-feature');
    elementsToAnimate.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add animation for hero content - Both homepage and SEO page
    const heroContent = document.querySelector('.hero-content');
    const seoHeroContent = document.querySelector('.seo-hero-text');
    
    if(heroContent) {
        heroContent.style.opacity = 0;
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if(seoHeroContent) {
        seoHeroContent.style.opacity = 0;
        seoHeroContent.style.transform = 'translateY(30px)';
        seoHeroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            seoHeroContent.style.opacity = 1;
            seoHeroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add hover effect for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading animation for page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // SEO Audit Form Handling
    const seoAuditForm = document.getElementById('seo-audit-form');
    if(seoAuditForm) {
        seoAuditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const website = formData.get('website');
            const goals = formData.get('goals');
            
            // Simple validation
            if(!name || !email || !website) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification('Thank you! Your SEO audit request has been received. We\'ll contact you within 24 hours.', 'success');
                seoAuditForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Track conversion (if you have analytics)
                if(typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-YOUR_CONVERSION_ID/seo_audit_request',
                        'value': 1.0,
                        'currency': 'USD'
                    });
                }
            }, 2000);
        });
    }

    // Process Step Animation
    const processSteps = document.querySelectorAll('.process-step');
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        processObserver.observe(step);
    });

    // Service Cards Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Case Study Expand/Collapse (for mobile)
    const caseStudies = document.querySelectorAll('.seo-case-study');
    caseStudies.forEach(study => {
        const content = study.querySelector('.case-study-content');
        const challengeSolution = study.querySelector('.challenge-solution');
        
        if (window.innerWidth <= 768) {
            // Add toggle functionality for mobile
            const header = study.querySelector('.case-study-content h3');
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', () => {
                study.classList.toggle('expanded');
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting for SEO page
    function highlightActiveNav() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if(link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    highlightActiveNav();
});



// Add some custom styles for loading state
/* const style = document.createElement('style');
style.textContent = `
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
    
    .seo-case-study {
        transition: all 0.3s ease;
    }
    
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
`;
document.head.appendChild(style);
*/
// Percentage counter animation - Robust version
document.addEventListener('DOMContentLoaded', function() {
    const percentageElements = document.querySelectorAll('.percentage');
    const resultNumbers = document.querySelectorAll('.result-number');
    
    // Combine all counter elements
    const allCounterElements = [...percentageElements, ...resultNumbers];
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate counting up - ULTRA ROBUST VERSION
    function animateCounter(element) {
        try {
            // Get the target value safely
            const targetValue = element.getAttribute('data-target');
            
            // Validate the target value
            if (!targetValue) {
                console.warn('Missing data-target attribute for element:', element);
                return;
            }
            
            const target = parseInt(targetValue);
            if (isNaN(target)) {
                console.warn('Invalid data-target value (not a number):', targetValue);
                return;
            }
            
            const duration = 2000; // Animation duration in milliseconds
            const step = Math.max(target / (duration / 16), 1); // Ensure step is at least 1
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    element.textContent = target.toString(); // Ensure it's a string
                } else {
                    element.textContent = Math.floor(current).toString();
                }
            }, 16);
            
            element.classList.add('animated');
        } catch (error) {
            console.error('Error animating counter:', error);
        }
    }
    
    // Function to handle scroll event
    function handleScroll() {
        allCounterElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                animateCounter(element);
            }
        });
    }
    
    // Initial check on page load
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll);
});

// Scroll animation for story points
document.addEventListener('DOMContentLoaded', function() {
    const storyPoints = document.querySelectorAll('.story-point');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    storyPoints.forEach(point => {
        observer.observe(point);
    });
});

// Notification system for form submissions
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Enhanced SEO page animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate service cards with staggered delay
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Animate process steps with staggered delay
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.15}s`;
    });
    
    
});

// Enhanced form validation for SEO audit
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

// Add input validation styling
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('#seo-audit-form input, #seo-audit-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if(this.value.trim() === '') {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
                
                // Specific validation for email and URL
                if(this.type === 'email' && !validateEmail(this.value)) {
                    this.classList.add('error');
                } else if(this.type === 'url' && !validateURL(this.value)) {
                    this.classList.add('error');
                }
            }
        });
        
        input.addEventListener('input', function() {
            if(this.value.trim() !== '') {
                this.classList.remove('error');
            }
        });
    });
});

// Add to existing style element
const additionalStyles = `
    #seo-audit-form input.error,
    #seo-audit-form textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
    
    .service-card,
    .process-step {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .seo-hero {
        transition: transform 0.1s ease-out;
    }
`;

// Append additional styles to the existing style element
const existingStyle = document.querySelector('style');
if(existingStyle) {
    existingStyle.textContent += additionalStyles;
}

// Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    const resultNumbers = document.querySelectorAll('.result-number');
    
    const allCounterElements = [...statNumbers, ...resultNumbers];
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateCounter(element) {
        try {
            const targetValue = element.getAttribute('data-target');
            
            if (!targetValue) {
                console.warn('Missing data-target attribute for element:', element);
                return;
            }
            
            const target = parseInt(targetValue);
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
                    element.textContent = target.toString();
                } else {
                    element.textContent = Math.floor(current).toString();
                }
            }, 16);
            
            element.classList.add('animated');
        } catch (error) {
            console.error('Error animating counter:', error);
        }
    }
    
    function handleScroll() {
        allCounterElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                animateCounter(element);
            }
        });
    }
    
    // Initial check
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll);

    // Enhanced animations for WordPress page
    const elementsToAnimate = document.querySelectorAll('.advantage-card, .approach-item, .service-card, .case-study, .feature');
    
    const wordpressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        wordpressObserver.observe(el);
    });

    // Staggered animation delays
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const serviceCards = document.querySelectorAll('.services-grid .service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Enhanced hover effects
    const interactiveCards = document.querySelectorAll('.advantage-card, .service-card, .case-study');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Platform comparison animation
    const platformComparison = document.querySelector('.platform-comparison');
    if(platformComparison) {
        const platformObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    platformComparison.style.transform = 'translateY(0)';
                    platformComparison.style.opacity = '1';
                }
            });
        }, { threshold: 0.3 });
        
        platformComparison.style.opacity = '0';
        platformComparison.style.transform = 'translateY(30px)';
        platformComparison.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        platformObserver.observe(platformComparison);
    }

    // Form input validation
    const formInputs = document.querySelectorAll('#wordpress-consultation-form input, #wordpress-consultation-form select, #wordpress-consultation-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if(this.value.trim() === '' && this.hasAttribute('required')) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
                
                if(this.type === 'email' && this.value.trim() !== '') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(this.value)) {
                        this.classList.add('error');
                    }
                }
            }
        });
        
        input.addEventListener('input', function() {
            if(this.value.trim() !== '') {
                this.classList.remove('error');
            }
        });
    });

    // Memory Lane Animations
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 300);
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Add hover effects for benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// AI SEO Page Specific JavaScript - Add to existing script.js

// AI Consultation Form Handling
const aiConsultationForm = document.getElementById('ai-seo-consultation-form');
if(aiConsultationForm) {
    aiConsultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const website = formData.get('website');
        const businessType = formData.get('business-type');
        const goals = formData.get('goals');
        
        // Simple validation
        if(!name || !email || !website || !businessType || !goals) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Thank you! Your AI SEO audit request has been received. We\'ll contact you within 24 hours.', 'success');
            aiConsultationForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Track conversion
            if(typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-YOUR_CONVERSION_ID/ai_seo_audit_request',
                    'value': 1.0,
                    'currency': 'USD'
                });
            }
        }, 2000);
    });
}

// AI Stats Counter Animation
const aiStatNumbers = document.querySelectorAll('.ai-seo-stats .result-number');

function animateAIStats() {
    aiStatNumbers.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            animateCounter(element);
        }
    });
}

// Initial check for AI stats
animateAIStats();

// Check AI stats on scroll
window.addEventListener('scroll', animateAIStats);



// AI Implementation Stories Animation
document.addEventListener('DOMContentLoaded', function() {
    const storyItems = document.querySelectorAll('.story-item');
    
    const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 300);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    storyItems.forEach(item => {
        storyObserver.observe(item);
    });
    
    // Stats counter animation for story items
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStoryStats() {
        statNumbers.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                animateCounter(element);
            }
        });
    }
    
    // Initial check
    animateStoryStats();
    
    // Check on scroll
    window.addEventListener('scroll', animateStoryStats);
    
    // Enhanced hover effects
    storyItems.forEach(item => {
        const visualContainer = item.querySelector('.visual-container');
        const storyContent = item.querySelector('.story-content');
        
        item.addEventListener('mouseenter', function() {
            visualContainer.style.transform = 'scale(1.05)';
            storyContent.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            visualContainer.style.transform = 'scale(1)';
            storyContent.style.transform = 'translateY(0)';
        });
    });
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Helper function to animate counters
    function animateCounter(element) {
        try {
            const targetValue = element.getAttribute('data-target');
            
            if (!targetValue) {
                console.warn('Missing data-target attribute for element:', element);
                return;
            }
            
            const target = parseInt(targetValue);
            if (isNaN(target)) {
                console.warn('Invalid data-target value:', targetValue);
                return;
            }
            
            const duration = 1500;
            const step = Math.max(target / (duration / 16), 1);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    element.textContent = target.toString();
                } else {
                    element.textContent = Math.floor(current).toString();
                }
            }, 16);
            
            element.classList.add('animated');
        } catch (error) {
            console.error('Error animating counter:', error);
        }
    }
});

// Add smooth scrolling for section links
document.querySelectorAll('a[href^="#how-ai-works"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// AI Benefits Cards Animation
const benefitCards = document.querySelectorAll('.benefit-card, .capability');
const benefitsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    benefitsObserver.observe(card);
});

// Staggered animation for benefit cards
benefitCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Offering Items Animation
const offeringItems = document.querySelectorAll('.offering-item');
const offeringObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

offeringItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    offeringObserver.observe(item);
});

// Form input validation for AI consultation form
const aiFormInputs = document.querySelectorAll('#ai-seo-consultation-form input, #ai-seo-consultation-form select, #ai-seo-consultation-form textarea');

aiFormInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if(this.value.trim() === '' && this.hasAttribute('required')) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
            
            if(this.type === 'email' && this.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailRegex.test(this.value)) {
                    this.classList.add('error');
                }
            }
            
            if(this.type === 'url' && this.value.trim() !== '') {
                try {
                    new URL(this.value);
                } catch (_) {
                    this.classList.add('error');
                }
            }
        }
    });
    
    input.addEventListener('input', function() {
        if(this.value.trim() !== '') {
            this.classList.remove('error');
        }
    });
});

// Add AI-specific error styles
const aiErrorStyles = `
    #ai-seo-consultation-form input.error,
    #ai-seo-consultation-form select.error,
    #ai-seo-consultation-form textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
    
    .implementation-step,
    .benefit-card,
    .capability,
    .offering-item {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .process-step {
        opacity: 0;
        transform: scale(0.8);
    }
`;

// Append AI error styles
const aiStyleElement = document.createElement('style');
aiStyleElement.textContent = aiErrorStyles;
document.head.appendChild(aiStyleElement);

// Case Studies Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Case Study Animation
    const caseStudies = document.querySelectorAll('.case-study');
    
    const caseStudyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 300);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    caseStudies.forEach(study => {
        caseStudyObserver.observe(study);
    });
    
    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseStudyItems = document.querySelectorAll('.case-study');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter case studies
            caseStudyItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
            
            // Re-trigger animations for visible items
            setTimeout(() => {
                caseStudies.forEach(study => {
                    if (study.style.display !== 'none') {
                        study.classList.add('visible');
                    }
                });
            }, 100);
        });
    });
    
    // Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number, .result-number');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateCounter(element) {
        try {
            const targetValue = element.getAttribute('data-target');
            
            if (!targetValue) {
                console.warn('Missing data-target attribute for element:', element);
                return;
            }
            
            let target;
            let hasSymbol = false;
            let symbol = '';
            
            // Check if target contains symbols
            if (targetValue.includes('%')) {
                target = parseInt(targetValue.replace('%', ''));
                hasSymbol = true;
                symbol = '%';
            } else if (targetValue.includes('#')) {
                target = parseInt(targetValue.replace('#', ''));
                hasSymbol = true;
                symbol = '#';
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
                    element.textContent = hasSymbol ? target + symbol : target.toString();
                } else {
                    element.textContent = hasSymbol ? Math.floor(current) + symbol : Math.floor(current).toString();
                }
            }, 16);
            
            element.classList.add('animated');
        } catch (error) {
            console.error('Error animating counter:', error);
        }
    }
    
    function handleStatsScroll() {
        statNumbers.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                animateCounter(element);
            }
        });
    }
    
    // Initial check
    handleStatsScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleStatsScroll);
    
    // Enhanced hover effects for case studies
    caseStudyItems.forEach(item => {
        const caseContent = item.querySelector('.case-study-content');
        const clientImage = item.querySelector('.client-image img');
        
        item.addEventListener('mouseenter', function() {
            caseContent.style.transform = 'translateY(-10px)';
            if (clientImage) {
                clientImage.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            caseContent.style.transform = 'translateY(0)';
            if (clientImage) {
                clientImage.style.transform = 'scale(1)';
            }
        });
    });
    
    // Tech tags interaction
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add case studies specific styles
const caseStudiesStyles = `
    .case-study {
        opacity: 0;
        transform: translateY(50px);
    }
    
    .stat-number,
    .result-number {
        opacity: 0;
    }
    
    .stat-number.animated,
    .result-number.animated {
        opacity: 1;
    }
`;

// Append case studies styles
const caseStyleElement = document.createElement('style');
caseStyleElement.textContent = caseStudiesStyles;
document.head.appendChild(caseStyleElement);

// Blog data
const blogPosts = [
    {
        id: 1,
        title: "The Future of SEO: How AI is Changing the Game",
        excerpt: "Discover how artificial intelligence is revolutionizing SEO strategies and what it means for your business.",
        date: "October 15, 2023",
        category: "AI SEO",
        readTime: "5 min read",
        content: `
            <h1>The Future of SEO: How AI is Changing the Game</h1>
            <div class="blog-meta-full">
                <span>October 15, 2023</span>
                <span>AI SEO</span>
                <span>5 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Artificial Intelligence is no longer a futuristic concept—it's actively reshaping the SEO landscape. As an SEO specialist in Sri Lanka, I've witnessed firsthand how AI tools are transforming traditional optimization strategies.</p>
                
                <h2>How AI is Impacting SEO</h2>
                <p>AI-powered tools can now analyze search patterns, user behavior, and content performance at a scale that was previously impossible. This allows for more precise targeting and optimization.</p>
                
                <h3>Key Areas Where AI is Making a Difference:</h3>
                <ul>
                    <li><strong>Content Creation and Optimization:</strong> AI tools can generate topic ideas, optimize existing content, and even create drafts.</li>
                    <li><strong>Keyword Research:</strong> Advanced algorithms can identify semantic relationships and long-tail opportunities.</li>
                    <li><strong>Technical SEO:</strong> AI can crawl websites more efficiently, identifying issues that might be missed by traditional tools.</li>
                    <li><strong>User Experience Analysis:</strong> Machine learning can interpret user behavior signals to improve site structure and content.</li>
                </ul>
                
                <h2>Implementing AI in Your SEO Strategy</h2>
                <p>For Sri Lankan businesses looking to stay competitive, integrating AI into your SEO approach is becoming essential. Start by:</p>
                <ol>
                    <li>Exploring AI-powered SEO tools that fit your budget and needs</li>
                    <li>Training your team on how to interpret AI-generated insights</li>
                    <li>Testing AI content generation while maintaining quality standards</li>
                    <li>Monitoring performance metrics to measure AI's impact</li>
                </ol>
                
                <p>The future of SEO is intelligent, adaptive, and data-driven. By embracing AI technologies now, you can position your business for long-term success in the evolving digital landscape.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "WordPress SEO: Essential Tips for Better Rankings",
        excerpt: "Learn the must-know WordPress SEO techniques to improve your website's search engine visibility.",
        date: "October 10, 2023",
        category: "WordPress",
        readTime: "4 min read",
        content: `
            <h1>WordPress SEO: Essential Tips for Better Rankings</h1>
            <div class="blog-meta-full">
                <span>October 10, 2023</span>
                <span>WordPress</span>
                <span>4 min read</span>
            </div>
            <div class="blog-article-content">
                <p>WordPress powers over 40% of all websites, making it crucial to understand how to optimize it for search engines. As a WordPress developer and SEO specialist in Sri Lanka, I've compiled the most effective strategies.</p>
                
                <h2>Essential WordPress SEO Practices</h2>
                <p>While WordPress is SEO-friendly out of the box, there are specific optimizations that can significantly boost your rankings.</p>
                
                <h3>Technical Optimizations:</h3>
                <ul>
                    <li><strong>Permalink Structure:</strong> Use a clean, descriptive URL structure that includes keywords.</li>
                    <li><strong>Site Speed:</strong> Optimize images, use caching, and choose a quality hosting provider.</li>
                    <li><strong>Mobile Responsiveness:</strong> Ensure your theme is fully responsive across all devices.</li>
                    <li><strong>XML Sitemaps:</strong> Generate and submit XML sitemaps to search engines.</li>
                </ul>
                
                <h3>Content Optimization:</h3>
                <ul>
                    <li><strong>Quality Content:</strong> Create valuable, original content that addresses user intent.</li>
                    <li><strong>Heading Structure:</strong> Use proper H1, H2, H3 tags to organize content logically.</li>
                    <li><strong>Internal Linking:</strong> Connect related content to improve navigation and authority flow.</li>
                    <li><strong>Image Optimization:</strong> Compress images and use descriptive alt text.</li>
                </ul>
                
                <h2>Recommended WordPress SEO Plugins</h2>
                <p>While there are many SEO plugins available, I typically recommend:</p>
                <ol>
                    <li>Yoast SEO or Rank Math for comprehensive optimization</li>
                    <li>WP Rocket or W3 Total Cache for performance</li>
                    <li>Smush for image optimization</li>
                    <li>Broken Link Checker for maintaining site health</li>
                </ol>
                
                <p>By implementing these WordPress SEO strategies, Sri Lankan businesses can significantly improve their online visibility and attract more qualified traffic to their websites.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Local SEO Strategies for Sri Lankan Businesses",
        excerpt: "Target local customers effectively with these proven local SEO techniques tailored for the Sri Lankan market.",
        date: "October 5, 2023",
        category: "Local SEO",
        readTime: "6 min read",
        content: `
            <h1>Local SEO Strategies for Sri Lankan Businesses</h1>
            <div class="blog-meta-full">
                <span>October 5, 2023</span>
                <span>Local SEO</span>
                <span>6 min read</span>
            </div>
            <div class="blog-article-content">
                <p>For businesses operating in Sri Lanka, local SEO is often the most effective way to attract customers. With the right strategies, you can appear in "near me" searches and Google's local pack results.</p>
                
                <h2>Why Local SEO Matters in Sri Lanka</h2>
                <p>With increasing smartphone penetration and mobile search usage, Sri Lankan consumers are frequently searching for local businesses. Appearing in these local search results can dramatically increase foot traffic and conversions.</p>
                
                <h3>Essential Local SEO Components:</h3>
                <ul>
                    <li><strong>Google Business Profile:</strong> Claim and optimize your listing with accurate information, photos, and regular updates.</li>
                    <li><strong>Local Citations:</strong> Ensure your business name, address, and phone number (NAP) are consistent across online directories.</li>
                    <li><strong>Localized Content:</strong> Create content that addresses local needs, events, and search queries.</li>
                    <li><strong>Local Link Building:</strong> Earn backlinks from other reputable Sri Lankan websites and local directories.</li>
                </ul>
                
                <h2>Optimizing for Sri Lankan Search Behavior</h2>
                <p>Understanding how Sri Lankan users search is key to effective local SEO:</p>
                <ol>
                    <li>Include location-specific keywords (Colombo, Kandy, Galle, etc.) in your content</li>
                    <li>Optimize for both Sinhala and English search queries when relevant</li>
                    <li>Focus on mobile optimization since most local searches happen on smartphones</li>
                    <li>Leverage local schema markup to provide search engines with precise location data</li>
                </ol>
                
                <h2>Measuring Local SEO Success</h2>
                <p>Track these key metrics to evaluate your local SEO performance:</p>
                <ul>
                    <li>Local search rankings for important keywords</li>
                    <li>Google Business Profile insights (views, actions)</li>
                    <li>Website traffic from local sources</li>
                    <li>Phone calls and direction requests from your listing</li>
                </ul>
                
                <p>By implementing these local SEO strategies, Sri Lankan businesses can connect with nearby customers at the moment they're ready to make a purchase decision.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Technical SEO: A Comprehensive Guide",
        excerpt: "Dive deep into the technical aspects of SEO that can make or break your website's performance.",
        date: "September 28, 2023",
        category: "Technical SEO",
        readTime: "7 min read",
        content: `
            <h1>Technical SEO: A Comprehensive Guide</h1>
            <div class="blog-meta-full">
                <span>September 28, 2023</span>
                <span>Technical SEO</span>
                <span>7 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Technical SEO forms the foundation of any successful optimization strategy. Without proper technical implementation, even the best content may struggle to rank.</p>
                
                <h2>What is Technical SEO?</h2>
                <p>Technical SEO refers to the process of optimizing your website's infrastructure to help search engines crawl, index, and understand your content more effectively.</p>
                
                <h3>Core Technical SEO Elements:</h3>
                <ul>
                    <li><strong>Crawlability:</strong> Ensuring search engines can access and understand your site structure</li>
                    <li><strong>Indexability:</strong> Controlling what pages search engines include in their indexes</li>
                    <li><strong>Site Architecture:</strong> Organizing content in a logical, hierarchical structure</li>
                    <li><strong>Page Speed:</strong> Optimizing loading times for both desktop and mobile users</li>
                </ul>
                
                <h2>Essential Technical SEO Checks</h2>
                <p>Every website should regularly audit these technical elements:</p>
                <ol>
                    <li><strong>Robots.txt:</strong> Ensure it's properly configured to guide search engine crawlers</li>
                    <li><strong>XML Sitemap:</strong> Create and submit a comprehensive sitemap to search engines</li>
                    <li><strong>Canonical Tags:</strong> Implement correctly to avoid duplicate content issues</li>
                    <li><strong>Structured Data:</strong> Add schema markup to help search engines understand your content</li>
                    <li><strong>HTTPS:</strong> Ensure your site uses secure connections throughout</li>
                    <li><strong>Mobile-Friendliness:</strong> Test and optimize for mobile users</li>
                </ol>
                
                <h2>Advanced Technical SEO Considerations</h2>
                <p>For more competitive niches, these advanced techniques can provide an edge:</p>
                <ul>
                    <li>JavaScript rendering and indexing considerations</li>
                    <li>International SEO and hreflang implementation</li>
                    <li>Core Web Vitals optimization</li>
                    <li>Site migration planning and execution</li>
                </ul>
                
                <p>Technical SEO might not be the most glamorous aspect of optimization, but it's absolutely essential for long-term success. By building a strong technical foundation, you create the conditions for all your other SEO efforts to flourish.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Content Strategy for SEO: Beyond Keyword Stuffing",
        excerpt: "Learn how to develop a content strategy that resonates with both users and search engines.",
        date: "September 20, 2023",
        category: "Content Strategy",
        readTime: "5 min read",
        content: `
            <h1>Content Strategy for SEO: Beyond Keyword Stuffing</h1>
            <div class="blog-meta-full">
                <span>September 20, 2023</span>
                <span>Content Strategy</span>
                <span>5 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Modern SEO has moved far beyond simple keyword targeting. Today, successful content strategy requires understanding user intent, creating comprehensive resources, and building topical authority.</p>
                
                <h2>The Evolution of Content in SEO</h2>
                <p>Google's algorithms have become increasingly sophisticated at understanding context, semantics, and user satisfaction. This means quality, relevance, and comprehensiveness matter more than ever.</p>
                
                <h3>Pillars of Modern Content Strategy:</h3>
                <ul>
                    <li><strong>User Intent:</strong> Create content that directly addresses what users are looking for</li>
                    <li><strong>Topical Authority:</strong> Cover subjects comprehensively to establish expertise</li>
                    <li><strong>EEAT:</strong> Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness</li>
                    <li><strong>Content Refresh:</strong> Regularly update and improve existing content</li>
                </ul>
                
                <h2>Building a Sustainable Content Strategy</h2>
                <p>Follow these steps to develop a content approach that delivers lasting results:</p>
                <ol>
                    <li><strong>Audit Existing Content:</strong> Identify what's working and what needs improvement</li>
                    <li><strong>Keyword and Topic Research:</strong> Find gaps in your coverage and new opportunities</li>
                    <li><strong>Content Planning:</strong> Create a calendar that addresses different stages of the customer journey</li>
                    <li><strong>Content Creation:</strong> Produce high-quality, original content that serves user needs</li>
                    <li><strong>Promotion and Distribution:</strong> Ensure your content reaches the right audience</li>
                    <li><strong>Performance Analysis:</strong> Measure what works and refine your approach</li>
                </ol>
                
                <h2>Content Formats That Perform Well in SEO</h2>
                <p>Diversify your content portfolio with these effective formats:</p>
                <ul>
                    <li>Comprehensive guides and how-to articles</li>
                    <li>Case studies and success stories</li>
                    <li>Original research and data-driven content</li>
                    <li>Product comparisons and reviews</li>
                    <li>FAQ pages that answer common customer questions</li>
                </ul>
                
                <p>A strategic approach to content creation not only improves SEO performance but also builds brand authority, engages your audience, and drives meaningful business results.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "E-commerce SEO: Driving Traffic and Sales",
        excerpt: "Optimize your online store for search engines to increase visibility, traffic, and conversions.",
        date: "September 15, 2023",
        category: "E-commerce SEO",
        readTime: "6 min read",
        content: `
            <h1>E-commerce SEO: Driving Traffic and Sales</h1>
            <div class="blog-meta-full">
                <span>September 15, 2023</span>
                <span>E-commerce SEO</span>
                <span>6 min read</span>
            </div>
            <div class="blog-article-content">
                <p>E-commerce SEO presents unique challenges and opportunities. With the right approach, you can significantly increase organic traffic and sales for your online store.</p>
                
                <h2>E-commerce SEO Fundamentals</h2>
                <p>Successful e-commerce SEO requires attention to both technical elements and content strategy tailored to commercial intent.</p>
                
                <h3>Key E-commerce SEO Components:</h3>
                <ul>
                    <li><strong>Product Page Optimization:</strong> Create unique, compelling product descriptions with relevant keywords</li>
                    <li><strong>Category Page Strategy:</strong> Develop category pages that serve as comprehensive resource hubs</li>
                    <li><strong>Site Architecture:</strong> Implement a logical hierarchy that helps users and search engines navigate your store</li>
                    <li><strong>Internal Linking:</strong> Connect related products and categories to distribute authority</li>
                </ul>
                
                <h2>Technical Considerations for E-commerce Sites</h2>
                <p>E-commerce platforms often introduce specific technical challenges:</p>
                <ol>
                    <li><strong>Duplicate Content:</strong> Manage product variations, filtered pages, and session IDs</li>
                    <li><strong>Faceted Navigation:</strong> Implement proper handling of filter and sort parameters</li>
                    <li><strong>Pagination:</strong> Use rel="next" and rel="prev" tags for paginated category pages</li>
                    <li><strong>Site Speed:</strong> Optimize for fast loading, especially on product and checkout pages</li>
                    <li><strong>Structured Data:</strong> Implement product schema markup to enhance search appearances</li>
                </ol>
                
                <h2>Content Strategy for E-commerce</h2>
                <p>Beyond product pages, develop additional content to attract and engage customers:</p>
                <ul>
                    <li>Buying guides and product comparison articles</li>
                    <li>How-to content related to your products</li>
                    <li>Blog posts addressing customer questions and pain points</li>
                    <li>Seasonal and trend-based content</li>
                </ul>
                
                <h2>Measuring E-commerce SEO Success</h2>
                <p>Track these key metrics to evaluate your e-commerce SEO performance:</p>
                <ul>
                    <li>Organic traffic to product and category pages</li>
                    <li>Conversion rates from organic search</li>
                    <li>Average order value from organic visitors</li>
                    <li>Return on investment from SEO activities</li>
                </ul>
                
                <p>By implementing a comprehensive e-commerce SEO strategy, online stores can reduce their dependence on paid advertising, build sustainable traffic sources, and increase profitability.</p>
            </div>
        `
    }
];

// DOM elements
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const blogGrid = document.getElementById('blogGrid');
const blogModal = document.getElementById('blogModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
const contactForm = document.getElementById('contactForm');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Load blog posts
function loadBlogPosts(limit = 3) {
    const postsToShow = blogPosts.slice(0, limit);
    
    blogGrid.innerHTML = postsToShow.map(post => `
        <div class="blog-card" data-id="${post.id}">
            <div class="blog-image">
                <div class="image-placeholder">${post.category}</div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more" data-id="${post.id}">Read More</a>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to blog cards and read more links
    document.querySelectorAll('.blog-card, .read-more').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(element.getAttribute('data-id'));
            openBlogModal(postId);
        });
    });
}

// Open blog modal
function openBlogModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        modalBody.innerHTML = `
            <article class="blog-article">
                ${post.content}
            </article>
        `;
        blogModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close blog modal
closeBtn.addEventListener('click', () => {
    blogModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === blogModal) {
        blogModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});
