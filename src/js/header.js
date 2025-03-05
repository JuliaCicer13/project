document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector('.logo-container-header'); // Правильный селектор
    const ankorList = document.querySelector('.ankors-menu');
    const menuContainer = document.querySelector('.menu-div');

    // Проверка существования элемента
    if (!logoContainer) {
        console.error("Элемент с классом '.logo-container-header' не найден!");
        return; // Выход из функции, если элемент не найден
    }

    const ankorArr = ['About me', 'Benefits', 'Projects', 'FAQ'];

    // Создание анкоров
    const createAnkor = str => `
        <li class='acnkorLink'>
            <a href='#'>${str}</a>
        </li>
    `;

    const createAnkorTemplate = arr => arr.map(el => createAnkor(el)).join('');
    const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

    addAnkorTemplate(createAnkorTemplate(ankorArr));

    const toggleClass = (elem, className) => elem.classList.toggle(className);

    const onclickMenuBtn = () => {
        toggleClass(ankorList, 'is-hidden');
    };

    menuContainer.addEventListener('click', onclickMenuBtn);

    // Открытие и закрытие меню бургера
    const burger = document.querySelector(".burger-whipe a");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");

    if (!burger || !menu  || !closeBtn) {
        console.error("Не найден один из элементов меню!");
        return;
    }

    burger.addEventListener("click", event => {
        event.preventDefault();
        menu.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
    });
});

const myLink = document.createElement("a");
const orderMyButton = document.querySelector('.order-button');

orderMyButton.addEventListener("click", getLink);
function getLink(event) {
    event.preventDefault();
    window.location.href =  "https://github.com/JuliaCicer13/project";
    myLink.textContent = "Go to the project";
    document.body.appendChild(myLink);
}