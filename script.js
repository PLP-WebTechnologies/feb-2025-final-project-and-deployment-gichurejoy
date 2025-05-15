document.addEventListener('DOMContentLoaded', function () {
    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Page load animation
        gsap.from('body', { opacity: 0, duration: 0.7, ease: 'power1.inOut' });

        // Hero section animation (if it exists)
        const hero = document.getElementById('hero');
        if (hero) {
            gsap.from(hero, { opacity: 0, y: 50, duration: 1, ease: 'expo.out', delay: 0.3 });
            gsap.from('#hero h1', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.6 });
            gsap.from('#hero p', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.8 });
        }

        // Staggered animation for product cards
        const productCards = document.querySelectorAll('.product-card');
        if (productCards.length > 0) {
            gsap.from(productCards, {
                opacity: 0,
                y: 50,
                duration: 0.7,
                stagger: 0.2, // Stagger the start of each animation by 0.2 seconds
                ease: 'power3.out',
                delay: 0.5 // Delay the start of the product card animations slightly
            });
        }

        // Contact form animation (if it exists)
        const contactFormSection = document.getElementById('contact-form-section');
        if (contactFormSection) {
            gsap.from(contactFormSection, { opacity: 0, y: 50, duration: 1, ease: 'expo.out', delay: 0.3 });
        }

    } else {
        console.warn('GSAP library not found. Animations will not run.');
    }

    // Existing Contact Form Validation
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent actual submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Form submitted successfully! (This is a demo)');
            contactForm.reset();
        });
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 