    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
        },
        keyboard: {
            enabled: true,
        },
    });

   document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.container-button-next'); 

    buttons.forEach(button => {
        button.addEventListener('click', function (event) { 
            event.preventDefault();
            const textBlock = document.querySelector('.target-text'); 

            if (textBlock.classList.contains('hidden')) { 
                textBlock.classList.remove('hidden'); 
                textBlock.classList.add('visible'); 
            } else { 
                textBlock.classList.remove('visible'); 
                textBlock.classList.add('hidden'); 
            }
            console.log('Button clicked')
        });
    });
});


