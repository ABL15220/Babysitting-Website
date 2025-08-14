// Animation au scroll
const elements = document.querySelectorAll('.fade-in, .zoom-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
