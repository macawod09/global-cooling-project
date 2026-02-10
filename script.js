// Language Switcher with full translations
let currentLanguage = 'EN';

// Translation dictionary
const translations = {
    EN: {
        // Header
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-pricing': 'Pricing',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-title-1': "Prague's 24/7",
        'hero-title-2': 'Precision Climate',
        'hero-title-3': 'Control',
        'hero-subtitle': 'Expert maintenance and emergency repair for industrial HVAC systems. Certified technicians, guaranteed response times, and unmatched reliability.',
        'hero-cta': 'Book Emergency Repair',
        'hero-phone': '+420 800 123 456',
        'hero-available': '24/7 Available',
        
        // Features
        'feature-1-title': 'Emergency Repair',
        'feature-1-desc': '24/7 rapid response for critical HVAC failures across Prague',
        'feature-2-title': 'Industrial Maintenance',
        'feature-2-desc': 'Preventive care programs for optimal system performance',
        'feature-3-title': 'F-Gas Compliance',
        'feature-3-desc': 'EU certified refrigerant handling and leak detection',
        'feature-4-title': 'Custom HVAC Installation',
        'feature-4-desc': 'Tailored climate solutions for data centers and facilities',
        
        // Trust section
        'trust-label': 'Trusted Excellence',
        'trust-title': 'Part of the Global Systems Group',
        'trust-text': 'As a member of the Global Systems Group, we bring international expertise and local dedication to every project. Our commitment to excellence is backed by decades of industry leadership.',
        'trust-1-title': 'EU F-Gas Certified',
        'trust-1-desc': 'Fully compliant with European refrigerant regulations',
        'trust-2-title': '24h Response Time',
        'trust-2-desc': 'Emergency technicians on-site within 24 hours guaranteed',
        'trust-3-title': '5 Year Warranty',
        'trust-3-desc': 'Comprehensive coverage on all installations and major repairs',
        'trust-highlight-title': 'Why Choose Us?',
        'trust-highlight-text': 'With over 500 satisfied corporate clients across Central Europe, we deliver precision climate control for mission-critical environments. Our ISO-certified processes ensure consistent quality and reliability.',
        
        // Contact form
        'form-title': 'Request a Quote',
        'form-subtitle': 'Get a personalized assessment within 24 hours',
        'form-name': 'Name',
        'form-name-placeholder': 'Your full name',
        'form-email': 'Email',
        'form-email-placeholder': 'your.email@company.com',
        'form-phone': 'Phone',
        'form-phone-placeholder': '+420 xxx xxx xxx',
        'form-message': 'Message',
        'form-message-placeholder': 'Describe your HVAC requirements...',
        'form-submit': 'Submit Request',
        'form-privacy': 'We respect your privacy. Your information is secure and will never be shared.',
        'form-success': 'Thank you for your request! We will contact you within 24 hours.',
        
        // Footer
        'footer-desc': 'Premium HVAC solutions for industrial and commercial facilities. Expert maintenance, emergency repairs, and custom installations across Prague.',
        'footer-member': 'A member of',
        'footer-links-title': 'Quick Links',
        'footer-contact-title': 'Contact',
        'footer-emergency': '24/7 Emergency',
        'footer-location': 'Prague, Czech Republic',
        'copyright': '© 2026 Global Cooling Systems. All rights reserved.'
    },
    CZ: {
        // Header
        'nav-services': 'Služby',
        'nav-portfolio': 'Portfolio',
        'nav-pricing': 'Ceník',
        'nav-about': 'O nás',
        'nav-contact': 'Kontakt',
        
        // Hero
        'hero-title-1': 'Pražská non-stop',
        'hero-title-2': 'Přesná klimatická',
        'hero-title-3': 'Kontrola',
        'hero-subtitle': 'Odborná údržba a pohotovostní opravy průmyslových klimatizačních systémů. Certifikovaní technici, garantované reakční časy a bezkonkurenční spolehlivost.',
        'hero-cta': 'Objednat Pohotovostní Opravu',
        'hero-phone': '+420 800 123 456',
        'hero-available': 'K dispozici 24/7',
        
        // Features
        'feature-1-title': 'Pohotovostní Opravy',
        'feature-1-desc': 'Nepřetržitá rychlá reakce na kritické poruchy klimatizace v Praze',
        'feature-2-title': 'Průmyslová Údržba',
        'feature-2-desc': 'Preventivní péče pro optimální výkon systému',
        'feature-3-title': 'Soulad s F-Gas',
        'feature-3-desc': 'EU certifikované nakládání s chladivy a detekce úniků',
        'feature-4-title': 'Zakázková Instalace HVAC',
        'feature-4-desc': 'Klimatická řešení na míru pro datová centra a zařízení',
        
        // Trust section
        'trust-label': 'Důvěryhodná Excellence',
        'trust-title': 'Součást Global Systems Group',
        'trust-text': 'Jako člen Global Systems Group přinášíme mezinárodní odbornost a místní oddanost každému projektu. Náš závazek k dokonalosti je podložen desetiletími průmyslového vedení.',
        'trust-1-title': 'EU F-Gas Certifikace',
        'trust-1-desc': 'Plně v souladu s evropskými předpisy o chladivech',
        'trust-2-title': '24h Reakční Čas',
        'trust-2-desc': 'Pohotovostní technici na místě do 24 hodin garantovaně',
        'trust-3-title': '5 Letá Záruka',
        'trust-3-desc': 'Komplexní pokrytí všech instalací a velkých oprav',
        'trust-highlight-title': 'Proč si vybrat nás?',
        'trust-highlight-text': 'S více než 500 spokojenými firemními klienty ve střední Evropě dodáváme přesnou klimatickou kontrolu pro kritická prostředí. Naše ISO certifikované procesy zajišťují konzistentní kvalitu a spolehlivost.',
        
        // Contact form
        'form-title': 'Vyžádat Nabídku',
        'form-subtitle': 'Získejte personalizované posouzení do 24 hodin',
        'form-name': 'Jméno',
        'form-name-placeholder': 'Vaše celé jméno',
        'form-email': 'Email',
        'form-email-placeholder': 'vas.email@firma.cz',
        'form-phone': 'Telefon',
        'form-phone-placeholder': '+420 xxx xxx xxx',
        'form-message': 'Zpráva',
        'form-message-placeholder': 'Popište vaše požadavky na klimatizaci...',
        'form-submit': 'Odeslat Požadavek',
        'form-privacy': 'Respektujeme vaše soukromí. Vaše informace jsou v bezpečí a nikdy nebudou sdíleny.',
        'form-success': 'Děkujeme za váš požadavek! Kontaktujeme vás do 24 hodin.',
        
        // Footer
        'footer-desc': 'Prémiová HVAC řešení pro průmyslová a komerční zařízení. Odborná údržba, pohotovostní opravy a instalace na míru v Praze.',
        'footer-member': 'Člen',
        'footer-links-title': 'Rychlé Odkazy',
        'footer-contact-title': 'Kontakt',
        'footer-emergency': 'Pohotovost 24/7',
        'footer-location': 'Praha, Česká republika',
        'copyright': '© 2026 Global Cooling Systems. Všechna práva vyhrazena.'
    }
};

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
    
    // Update all text content
    updatePageContent(lang);
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLang);
});

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
            
            // Show success message in current language
            const successMessage = translations[currentLanguage]['form-success'];
            alert(successMessage);
            
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
