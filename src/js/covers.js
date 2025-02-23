const coverContainer = document.querySelector('.cover-container');
const coverSection = document.querySelector('.cover-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            coverContainer.style.animationPlayState = 'running'; 
        } else {
            coverContainer.style.animationPlayState = 'paused'; 
        }
    });
});


observer.observe(coverSection);