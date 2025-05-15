// Main JavaScript file for additional functionality

// Ensure hero section is visible
document.addEventListener('DOMContentLoaded', function() {
    // Debug image loading
    const profileImage = document.querySelector('#hero-image img');
    if (profileImage) {
        console.log('Profile image element found');
        
        // Check if image loaded successfully
        if (profileImage.complete) {
            console.log('Image loaded successfully');
        } else {
            console.log('Image not loaded yet');
            profileImage.addEventListener('load', function() {
                console.log('Image loaded via event listener');
            });
        }
        
        // Check image path
        console.log('Image source:', profileImage.src);
        
        // Try to load image with fetch to check if it exists
        fetch(profileImage.src)
            .then(response => {
                if (response.ok) {
                    console.log('Image file exists and is accessible');
                } else {
                    console.log('Image file not accessible:', response.status);
                    // Show fallback text
                    document.getElementById('fallback-text').style.display = 'block';
                }
            })
            .catch(error => {
                console.log('Error checking image:', error);
                // Show fallback text
                document.getElementById('fallback-text').style.display = 'block';
            });
    } else {
        console.log('Profile image element not found');
    }

    // Fallback for hero section visibility
    setTimeout(function() {
        const heroElements = document.querySelectorAll('#hero-title, #hero-subtitle, #hero-text, #hero-buttons, #hero-image');
        heroElements.forEach(element => {
            if (element.style.opacity === '0') {
                element.style.opacity = '1';
                element.style.transform = 'none';
            }
        });
    }, 2000); // Fallback after 2 seconds

    // Add active class to current navigation item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('text-blue-400');
        } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('text-blue-400');
        }
    });
});

// Form validation for contact form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        if (!name.value.trim()) {
            isValid = false;
            name.classList.add('border-red-500');
        } else {
            name.classList.remove('border-red-500');
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            isValid = false;
            email.classList.add('border-red-500');
        } else {
            email.classList.remove('border-red-500');
        }
        
        if (!message.value.trim()) {
            isValid = false;
            message.classList.add('border-red-500');
        } else {
            message.classList.remove('border-red-500');
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            const formContainer = contactForm.parentElement;
            formContainer.innerHTML = `
                <div class="bg-green-500 text-white p-6 rounded-lg text-center">
                    <h3 class="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for your message. I'll get back to you soon.</p>
                </div>
            `;
        }
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 