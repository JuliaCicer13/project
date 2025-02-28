const links = [
        { url: "https://www.instagram.com/goitclub/", text: "IG" },
        { url: "https://www.facebook.com/goITclub/", text: "FB" },
        { url: "https://www.youtube.com/c/GoIT", text: "YT" },
        { url: "https://github.com/Alex-chernomor/project-K3n5t13n", text: "GH" },
        { url: "mailto:lloydfefferson@gmail.com", text: "lloydfefferson@gmail.com", isEmail: true } // Для кнопки
    ]


    
const listLink = document.querySelector('.list-link');

const createMarkUp = links => {
    return links.map(link => `
        <li class="link-wrap${link.isEmail ? ' link-big' : ''}">
            <a class="link" href="${link.url}" target="_blank">${link.text}</a>
        </li>
    `).join('');
}

listLink.innerHTML = createMarkUp(links);


const buttonStivi =
document.createElement("button");
buttonStivi.classList.add('button-button') ;
buttonStivi.style.display = 'block'
buttonStivi.type = 'button';

 const containerHero = document.querySelector('.hero-container');
 containerHero.appendChild(buttonStivi) ;
 

 buttonStivi.addEventListener("click", clickFunction);

 function clickFunction(event) {
    event.preventDefault();
     const linkProject = document.createElement("a");
     linkProject.href = "https://github.com/JuliaCicer13/project";
     linkProject.classList.add('link-project');
     linkProject.appendChild(buttonStivi);
 }