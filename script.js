// Language Switcher
let currentLanguage = 'EN';

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    const czBtn = document.getElementById('lang-cz');
    const enBtn = document.getElementById('lang-en');
    
    if (lang === 'CZ') {
        czBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        czBtn.classList.remove('active');
    }
    
    // In a real application, you would update all text content here
    console.log('Language switched to:', lang);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.backgroundColor = 'white';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your request! We will contact you within 24 hours.');
            
            // Reset form
            form.reset();
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add parallax effect to decorative element
window.addEventListener('scroll', function() {
    const decorativeElement = document.querySelector('.decorative-element');
    if (decorativeElement) {
        const scrolled = window.pageYOffset;
        decorativeElement.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Responsive navigation adjustment
window.addEventListener('resize', function() {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 1024) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
    } else {
        nav.style.display = 'none';
    }
});