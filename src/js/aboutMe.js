document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
    });

    const button = document.querySelector('.button');
    const content = document.querySelector('.target-text');

    
    button.addEventListener('click', togleFunction);
    function togleFunction(event) {
        event.preventDefault(); 
 
        content.classList.toggle('vissible');
       
     }          
});

