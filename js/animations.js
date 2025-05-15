// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Animation
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'fixed top-0 right-0 w-64 h-full bg-gray-800 transform translate-x-full transition-transform duration-300 z-50 p-6';
mobileMenu.innerHTML = `
    <div class="flex justify-between items-center mb-8">
        <a href="index.html" class="text-2xl font-bold">MT</a>
        <button id="close-menu" class="text-2xl"><i class="fas fa-times"></i></button>
    </div>
    <div class="flex flex-col space-y-6">
        <a href="index.html" class="text-lg hover:text-blue-400 transition-colors">Home</a>
        <a href="about.html" class="text-lg hover:text-blue-400 transition-colors">About</a>
        <a href="skills.html" class="text-lg hover:text-blue-400 transition-colors">Skills</a>
        <a href="projects.html" class="text-lg hover:text-blue-400 transition-colors">Projects</a>
        <a href="contact.html" class="text-lg hover:text-blue-400 transition-colors">Contact</a>
    </div>
`;
document.body.appendChild(mobileMenu);

const closeMenuBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

// Home Page Animations
if (document.getElementById('hero-title')) {
    // Hero section animations
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animate the hero title with a typing effect
    heroTimeline
        .from('#hero-title', { 
            y: 100, 
            opacity: 0, 
            duration: 1,
            delay: 0.5
        })
        .from('#hero-subtitle', { 
            y: 50, 
            opacity: 0, 
            duration: 0.8
        }, '-=0.5')
        .from('#hero-text', { 
            y: 50, 
            opacity: 0, 
            duration: 0.8
        }, '-=0.5')
        .from('#hero-buttons', { 
            y: 30, 
            opacity: 0, 
            duration: 0.8
        }, '-=0.5');
    
    // Make sure hero image is visible
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'none';
    }
}

// About Page Animations
if (document.getElementById('about-title')) {
    // About section animations
    gsap.from('#about-title', { 
        y: 50, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#about-title',
            start: 'top 80%'
        }
    });
    
    gsap.from('#about-image', { 
        x: -100, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#about-image',
            start: 'top 80%'
        }
    });
    
    gsap.from('#about-text', { 
        x: 100, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#about-text',
            start: 'top 80%'
        }
    });
    
    // Timeline animations
    gsap.from('.timeline-item', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#timeline-title',
            start: 'top 80%'
        }
    });
}

// Skills Page Animations
if (document.getElementById('skills-title')) {
    // Skills section animations
    gsap.from('#skills-title', { 
        y: 50, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#skills-title',
            start: 'top 80%'
        }
    });
    
    // Animate skill cards
    gsap.from('.skill-card', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#web-title',
            start: 'top 80%'
        }
    });
    
    // Animate skill progress bars
    gsap.from('.skill-level div div', { 
        width: 0, 
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#web-title',
            start: 'top 80%'
        }
    });
}

// Projects Page Animations
if (document.getElementById('projects-title')) {
    // Projects section animations
    gsap.from('#projects-title', { 
        y: 50, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#projects-title',
            start: 'top 80%'
        }
    });
    
    // Animate project cards
    gsap.from('.project-card', { 
        y: 100, 
        opacity: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 80%'
        }
    });
}

// Contact Page Animations
if (document.getElementById('contact-title')) {
    // Contact section animations
    gsap.from('#contact-title', { 
        y: 50, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#contact-title',
            start: 'top 80%'
        }
    });
    
    // Animate contact form
    gsap.from('#contact-form', { 
        x: -100, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#contact-form',
            start: 'top 80%'
        }
    });
    
    // Animate contact info
    gsap.from('#contact-info', { 
        x: 100, 
        opacity: 0, 
        duration: 1,
        scrollTrigger: {
            trigger: '#contact-info',
            start: 'top 80%'
        }
    });
}

// Initialize particle effect
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#3b82f6'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3b82f6',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
}); 