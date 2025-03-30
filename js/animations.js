document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for sections
    const sections = document.querySelectorAll('.about-content, .work-content, .portfolio-content, .contact-content');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2 // 20% of the element needs to be visible
    });

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Separate observer for portfolio items with stagger effect
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay between each item
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all portfolio items
    portfolioItems.forEach(item => {
        portfolioObserver.observe(item);
    });

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
}); 