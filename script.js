
/* menu mobile */
const menuIcone = document.querySelector('.cabecalho__menu--icone');
menuIcone.addEventListener('click', () => {
    let menu = document.querySelector('.cabecalho__menu--lista');
    menu.classList.toggle('ativa')
})

/* scroll suave */
function scrollSuave(){

    const linksInternos = document.querySelectorAll('.lista-link[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
scrollSuave();


/* animar sections */
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - windowMetade) < 0;
        if(sectionVisivel) {
            section.classList.add('ativo');
        }
    })
}

window.addEventListener('scroll', animaScroll);

animaScroll();
