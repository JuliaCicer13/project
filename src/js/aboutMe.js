document.querySelectorAll('.container-button, .container-button-next').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.target-text').forEach(item => {
            item.style.display = 'none';
            item.previousElementSibling.setAttribute('aria-expanded', 'false');
        });

      
        if (!isOpen) {
            this.setAttribute('aria-expanded', 'true');
        }
    });
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: null,
    },
    keyboard: {
        enabled: true,
    },
});

