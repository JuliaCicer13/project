const coverContainer = document.querySelector('.cover-container');
const coverSection = document.querySelector('.cover-section');
const images = document.querySelectorAll('.cover');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            images.forEach(img => img.style.animationPlayState = 'running');
        } else {
            images.forEach(img => img.style.animationPlayState = 'paused');
        }
    });
});

observer.observe(coverSection);