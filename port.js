document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if(name && email && message) {
            // In a real application, you would send this data to a server
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.display = 'block';
            formMessage.style.color = '#00abf0';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add a menu icon later)
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if(menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }

    // Close navbar when clicking on a link (for mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            if(navbar.classList.contains('active')) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.service-box, .project-box');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if(name && email && message) {
            // In a real application, you would send this data to a server
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.display = 'block';
            formMessage.style.color = '#00abf0';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add a menu icon later)
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if(menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }

    // Close navbar when clicking on a link (for mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            if(navbar.classList.contains('active')) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.service-box, .project-box');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}