// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
let isMobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    // Mobile menu functionality would be implemented here
    console.log('Mobile menu clicked');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced skill bars animation with intersection observer
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        const percentage = bar.getAttribute('data-percentage');
        setTimeout(() => {
            bar.style.width = percentage + '%';
            // Add glow effect when animation completes
            setTimeout(() => {
                bar.classList.add('glow');
            }, 2000);
        }, index * 200); // Stagger the animations
    });
};

// Enhanced skills section observer
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                // Animate skill items
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    \n    skillsObserver.observe(skillsSection);
}

// Projects section animation
const projectsSection = document.getElementById('projects');
if (projectsSection) {
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projectCards = document.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                projectsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    \n    projectsObserver.observe(projectsSection);
}

// Technology badges interaction
const techBadges = document.querySelectorAll('.tech-badge');
techBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'translateY(-3px) scale(1.05)';
    });
    \n    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card interactions
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    \n    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill category card interactions
const skillCategoryCards = document.querySelectorAll('.skill-category-card');
skillCategoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) rotateY(5deg)';
    });
    \n    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Enhanced button animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        \n        ripple.style.cssText = `\n            position: absolute;\n            border-radius: 50%;\n            background: rgba(255, 255, 255, 0.3);\n            transform: scale(0);\n            animation: ripple 0.6s linear;\n            width: ${size}px;\n            height: ${size}px;\n            left: ${x}px;\n            top: ${y}px;\n            pointer-events: none;\n        `;\n        \n        this.appendChild(ripple);\n        \n        setTimeout(() => {\n            ripple.remove();\n        }, 600);\n    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `\n    @keyframes ripple {\n        to {\n            transform: scale(2);\n            opacity: 0;\n        }\n    }\n`;\ndocument.head.appendChild(style);

// Parallax effect for skill and project sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    \n    // Skills section parallax
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsOffset = skillsSection.offsetTop;
        const skillsHeight = skillsSection.offsetHeight;
        \n        if (scrolled > skillsOffset - window.innerHeight && scrolled < skillsOffset + skillsHeight) {
            const parallaxValue = (scrolled - skillsOffset) * 0.1;
            skillsSection.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
    \n    // Projects section parallax
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const projectsOffset = projectsSection.offsetTop;
        const projectsHeight = projectsSection.offsetHeight;
        \n        if (scrolled > projectsOffset - window.innerHeight && scrolled < projectsOffset + projectsHeight) {
            const parallaxValue = (scrolled - projectsOffset) * 0.05;
            projectsSection.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
});

// Dynamic skill percentage counter
const animateCounters = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    \n    skillItems.forEach(item => {
        const percentageElement = item.querySelector('.text-blue-400');
        if (percentageElement) {
            const targetPercentage = parseInt(percentageElement.textContent);
            let currentPercentage = 0;
            \n            const counter = setInterval(() => {
                if (currentPercentage < targetPercentage) {
                    currentPercentage += 2;
                    percentageElement.textContent = currentPercentage + '%';
                } else {
                    clearInterval(counter);
                }
            }, 50);
        }
    });
};

// Trigger counter animation when skills section is visible
if (skillsSection) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateCounters, 500);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    \n    counterObserver.observe(skillsSection);
}

// Add loading states for project images
const projectImages = document.querySelectorAll('.project-card .h-48');
projectImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        // Simulate loading state
        image.style.opacity = '0.8';
        setTimeout(() => {
            image.style.opacity = '1';
        }, 200);
    });
});

// Typing effect for hero section
const typewriterText = document.querySelector('.typewriter');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    typewriterText.style.borderRight = '3px solid #3b82f6';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Blinking cursor effect
            setInterval(() => {
                typewriterText.style.borderRight = 
                    typewriterText.style.borderRight === '3px solid transparent' 
                    ? '3px solid #3b82f6' 
                    : '3px solid transparent';
            }, 500);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('home');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Particle effect for hero section (simplified)
const createParticles = () => {
    const hero = document.getElementById('home');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #3b82f6;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.5;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
};

// Initialize particles
createParticles();

// Form validation and submission (when contact form is added)
const handleFormSubmission = (formData) => {
    // This would handle form submission logic
    console.log('Form submitted:', formData);
};

// Smooth reveal animations
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Theme Management - Fixed Implementation
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeToggleCircle = document.querySelector('.theme-toggle-circle');
        this.sunIcon = document.querySelector('.theme-icon-sun');
        this.moonIcon = document.querySelector('.theme-icon-moon');
        
        // Get saved theme or default to system preference
        this.currentTheme = this.getInitialTheme();
        this.init();
    }

    getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        
        return 'dark';
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupTheme();
            });
        } else {
            this.setupTheme();
        }
    }

    setupTheme() {
        // Apply the current theme immediately
        this.applyTheme(this.currentTheme);
        this.updateToggleButton();
        this.bindEvents();
        
        console.log(`Theme initialized: ${this.currentTheme}`);
    }

    bindEvents() {
        if (!this.themeToggle) {
            console.error('Theme toggle button not found');
            return;
        }

        this.themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
        });

        // Add keyboard support
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Add ARIA attributes for accessibility
        this.themeToggle.setAttribute('role', 'switch');
        this.themeToggle.setAttribute('aria-label', 'Toggle between light and dark theme');
        this.themeToggle.setAttribute('tabindex', '0');
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.currentTheme = newTheme;
        
        // Add visual feedback animation
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);

        // Apply new theme
        this.applyTheme(newTheme);
        this.updateToggleButton();
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
        
        console.log(`Theme toggled to: ${newTheme}`);
    }

    applyTheme(theme) {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update body classes for immediate visual feedback
        document.body.classList.remove('bg-gray-900', 'text-white', 'bg-white', 'text-gray-900');
        
        if (theme === 'light') {
            document.body.classList.add('bg-white', 'text-gray-900');
        } else {
            document.body.classList.add('bg-gray-900', 'text-white');
        }

        // Update ARIA state
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-checked', theme === 'light' ? 'true' : 'false');
        }

        // Trigger theme change event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: theme } 
        }));
    }

    updateToggleButton() {
        if (!this.themeToggleCircle || !this.sunIcon || !this.moonIcon) {
            console.error('Theme toggle elements not found');
            return;
        }

        if (this.currentTheme === 'light') {
            // Light theme - show moon icon, move toggle to right
            this.themeToggleCircle.style.transform = 'translateX(24px)';
            this.sunIcon.style.display = 'none';
            this.sunIcon.classList.add('hidden');
            this.moonIcon.style.display = 'block';
            this.moonIcon.classList.remove('hidden');
            
            // Update toggle button background
            this.themeToggle.style.backgroundColor = 'var(--toggle-bg)';
        } else {
            // Dark theme - show sun icon, move toggle to left
            this.themeToggleCircle.style.transform = 'translateX(0)';
            this.sunIcon.style.display = 'block';
            this.sunIcon.classList.remove('hidden');
            this.moonIcon.style.display = 'none';
            this.moonIcon.classList.add('hidden');
            
            // Update toggle button background
            this.themeToggle.style.backgroundColor = 'var(--toggle-bg)';
        }
    }

    getTheme() {
        return this.currentTheme;
    }
}

// Initialize theme manager
let themeManager;

const initializeTheme = () => {
    themeManager = new ThemeManager();
};

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
    initializeTheme();
}

// Listen for system theme changes
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        // Only update if user hasn't manually set a preference
        if (!localStorage.getItem('theme') && themeManager) {
            const systemTheme = e.matches ? 'dark' : 'light';
            themeManager.currentTheme = systemTheme;
            themeManager.applyTheme(systemTheme);
            themeManager.updateToggleButton();
        }
    });
}

// Enhanced theme-aware animations
window.addEventListener('themeChanged', (e) => {
    const theme = e.detail.theme;
    
    // Update particle colors based on theme
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (theme === 'light') {
            particle.style.background = '#3b82f6';
            particle.style.opacity = '0.3';
        } else {
            particle.style.background = '#3b82f6';
            particle.style.opacity = '0.5';
        }
    });

    // Update skill bar glow effects
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        if (theme === 'light') {
            bar.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.2)';
        } else {
            bar.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.3)';
        }
    });

    // Update navigation styling
    const nav = document.querySelector('nav');
    if (nav) {
        if (theme === 'light') {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            nav.style.borderBottomColor = '#e5e7eb';
        } else {
            nav.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
            nav.style.borderBottomColor = '#374151';
        }
    }
});

// Enhanced button animations with theme awareness
const enhancedButtons = document.querySelectorAll('button');
enhancedButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.id === 'theme-toggle') return; // Skip for theme toggle
        
        // Create ripple effect with theme-aware colors
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const theme = themeManager.getTheme();
        const rippleColor = theme === 'light' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.3)';
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: ${rippleColor};
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});