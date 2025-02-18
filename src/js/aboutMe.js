document.querySelectorAll('.container-button, .container-button-next').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.target-text').forEach(item => {
            item.style.display = 'none';
            item.previousElementSibling.setAttribute('aria-expanded', 'false');
        });

      
        if (!isOpen) {
            content.style.display = 'block';
            this.setAttribute('aria-expanded', 'true');
        }
    });
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    looperSlides: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
});

const nextButton = document.querySelector('.swiper-button-next');
nextButton.addEventListener('click', function() {
    swiper.slideNext(); 
});