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