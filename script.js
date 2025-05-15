// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
    <div class="p-6">
        <div class="flex justify-end">
            <button id="close-menu" class="text-2xl">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="mt-8 space-y-4">
            <a href="#home" class="block text-lg hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" class="block text-lg hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" class="block text-lg hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" class="block text-lg hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" class="block text-lg hover:text-blue-400 transition-colors">Contact</a>
        </div>
    </div>
`;
document.body.appendChild(mobileMenu);

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

document.getElementById('close-menu').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal-text, .reveal-image');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

// Initial check for elements in view
revealOnScroll();

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Smooth scroll for navigation links
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

// Form submission handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add typing effect to hero section
const heroTitle = document.querySelector('#home h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect when page loads
window.addEventListener('load', typeWriter); 