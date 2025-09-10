// Typing Animation
class TypingAnimation {
    constructor(element, text, speed = 120, delay = 500) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.delay = delay;
        this.currentIndex = 0;
        this.isComplete = false;
    }

    async start() {
        await this.sleep(this.delay);
        return new Promise((resolve) => {
            const timer = setInterval(() => {
                if (this.currentIndex <= this.text.length) {
                    this.element.textContent = this.text.slice(0, this.currentIndex);
                    this.currentIndex++;
                } else {
                    this.isComplete = true;
                    clearInterval(timer);
                    resolve();
                }
            }, this.speed);
        });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Navigation
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.sections = document.querySelectorAll('section[id]');
        this.activeSection = 'home';
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Mobile menu toggle
        this.mobileMenuBtn?.addEventListener('click', () => this.toggleMobileMenu());

        // Navigation links
        [...this.navLinks, ...this.mobileNavLinks].forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Scroll listener
        window.addEventListener('scroll', () => this.handleScroll());
    }

    toggleMobileMenu() {
        const isOpen = this.mobileMenu.style.display === 'block';
        this.mobileMenu.style.display = isOpen ? 'none' : 'block';
        
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.className = isOpen ? 'fas fa-bars' : 'fas fa-times';
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
        
        // Close mobile menu
        this.mobileMenu.style.display = 'none';
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        const scrollPosition = window.scrollY + 150;

        // Find active section
        for (let i = this.sections.length - 1; i >= 0; i--) {
            const section = this.sections[i];
            if (section.offsetTop <= scrollPosition) {
                this.activeSection = section.id;
                break;
            }
        }

        // Update active nav links
        this.updateActiveLinks();
    }

    updateActiveLinks() {
        [...this.navLinks, ...this.mobileNavLinks].forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === this.activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Skills Animation
class SkillsAnimation {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.checkVisibility());
    }

    checkVisibility() {
        if (this.hasAnimated) return;

        const skillsSection = document.querySelector('.skills');
        if (!skillsSection) return;

        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            this.animateSkills();
            this.hasAnimated = true;
        }
    }

    animateSkills() {
        this.skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, index * 100);
        });
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Simulate form submission
        this.showLoadingState();
        
        setTimeout(() => {
            this.showSuccessMessage();
            this.resetForm();
        }, 1000);
    }

    showLoadingState() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = originalText;
    }

    showSuccessMessage() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            submitBtn.innerHTML = submitBtn.dataset.originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 2000);

        // Show toast notification
        this.showToast('Message sent successfully! I\'ll get back to you soon.');
    }

    resetForm() {
        this.form.reset();
    }

    showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;

        // Add toast styles
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Scroll to Top
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollTopBtn');
        this.init();
    }

    init() {
        if (!this.button) return;
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        this.button.addEventListener('click', () => this.scrollToTop());
        window.addEventListener('scroll', () => this.handleScroll());
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            this.button.style.opacity = '1';
            this.button.style.visibility = 'visible';
        } else {
            this.button.style.opacity = '0';
            this.button.style.visibility = 'hidden';
        }
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '-50px'
            }
        );
        this.init();
    }

    init() {
        // Observe elements that should animate on scroll
        const animatedElements = document.querySelectorAll(`
            .fade-in-up:not(.delay-1000):not(.delay-2000):not(.delay-3000):not(.delay-4000):not(.delay-5000),
            .education-item,
            .skill-category,
            .timeline-item,
            .project-card
        `);

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Smooth reveal animations for cards
class CardAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.addHoverEffects();
    }

    addHoverEffects() {
        // Project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Skill categories
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                category.style.transform = 'translateY(-4px)';
            });
            
            category.addEventListener('mouseleave', () => {
                category.style.transform = 'translateY(0)';
            });
        });
    }
}

// Global utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const typing = new TypingAnimation(typingElement, 'Mohamed Fares', 120, 500);
        typing.start();
    }

    // Initialize all components
    new Navigation();
    new SkillsAnimation();
    new ContactForm();
    new ScrollToTop();
    new AnimationObserver();
    new CardAnimations();

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary') || this.classList.contains('btn-gradient')) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero background
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-circle-1, .hero-circle-2');
        
        parallaxElements.forEach((el, index) => {
            const speed = index === 0 ? 0.5 : 0.3;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Add fade-in animation to hero content with delays
    const heroElements = [
        { selector: '.hero-greeting', delay: 0 },
        { selector: '.hero-name', delay: 2000 },
        { selector: '.hero-title', delay: 3000 },
        { selector: '.hero-description', delay: 4000 },
        { selector: '.hero-badges', delay: 5000 },
        { selector: '.hero-buttons', delay: 6000 }
    ];

    heroElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });

    console.log('Portfolio loaded successfully! 🚀');
});
