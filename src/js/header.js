import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg'

const logoContainer = document.querySelector('.logo-container');
const ankorList = document.querySelector('.ankors-menu');
const menuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.menu-div');

const ankorArr = ['About me','Benefits','Projects','FAQ'];


const createImg = (imgDirect,className)=>{
    const img = document.createElement('img');
    img.src = imgDirect;  
    img.classList.add(className);
    return img
}

;
const addImg = (elemForImg, img)=>{
    elemForImg.prepend(img);

}
addImg(logoContainer,createImg(logoImg,'img-logo'));


const createAnkor = str =>{
    return`
    <li class='acnkorLink'>
    <a href='#'>${str}<a/
    <li/>
    `
};

const createAnkorTemplate = arr => arr.map(el=>createAnkor(el)).join('');

const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

const addClass = function(elem, className){
    return elem.classList.add(className);
};

const removeClass = function(elem, className){
    return elem.classList.remove(className);
};


const toggleClass = function(elem, className){
    return elem.classList.toggle(className);
};
addAnkorTemplate(createAnkorTemplate(ankorArr));

const onclickMenuBtn = (e) =>{
    toggleClass(ankorList,'is-hidden');
    
}

menuContainer.addEventListener('click', onclickMenuBtn);


// Open burger-modal wibdow

    document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-whipe a"); // Берем саму ссылку внутри бургера
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");

    if (!burger || !menu || !closeBtn) {
        console.error("Не найден один из элементов меню!");
        return;
    }

    function openMenu(event) {
        event.preventDefault(); // Останавливаем переход по ссылке
        menu.style.display = "block";
    }

    function closeMenu() {
        menu.style.display = "none";
    }

    burger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
});