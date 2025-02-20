document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.button-round');
    const nextButton = document.querySelector('.button-round-second');

    
    if (!prevButton || !nextButton) {
        console.error("Navigation buttons not found!");
        return;
    }

    const swiper = new Swiper('.container-reviews', {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: false, 
        navigation: {
            nextEl: '.button-round',
            prevEl: '.button-round-second',
        },
        keyboard: {
            enabled: true,
        },
        on: {
            init: function () { 
                prevButton.disabled = this.isBeginning;
                nextButton.disabled = this.isEnd;
            },
            slideChange: function () {
                prevButton.disabled = this.isBeginning;
                nextButton.disabled = this.isEnd;
            },
        },
    });

    
    setTimeout(() => {
        if (swiper) {
            prevButton.disabled = swiper.isBeginning;
            nextButton.disabled = swiper.isEnd;
        }
    }, 100);
});