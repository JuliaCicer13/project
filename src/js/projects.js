const slides = [
    { url: '../img/imgJPEG/projectImg/projectImg2.jpg' },
    { url: '../img/imgJPEG/projectImg/projectImg3.jpg' }
];

let currentSlide = 0;
const imgElement = document.getElementById('project-img');
const nextButton = document.querySelector('.button-project');
const prevButton = document.querySelector('.button-project-second');

// Функция переключения слайдов
function updateSlide() {
    imgElement.src = slides[currentSlide].url;
}

// Обработчик кнопки "вперед"
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

// Обработчик кнопки "назад"
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
    loop: false,
    navigation: {
        nextEl: '.button-project',
        prevEl: '.button-project-second',
    },
    keyboard: {
        enabled: true,
    }
});