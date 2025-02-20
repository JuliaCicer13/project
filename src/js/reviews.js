    const swipe = new Swiper('.container-reviews', {
        slidesPerView: 4,
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

   
