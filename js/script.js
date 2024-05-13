let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () => {
    navbar.classList.add('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

//galery service//

// galery service end //

const translations = {
    'en-us': {
        title: 'Meu Site Multilíngue',
        description: 'Bem-vindo ao meu site!'
    },
    'nl-nl': {
        title: 'My Multilingual Site',
        description: 'Welcome to my site!'
    },
    // Adicione mais idiomas conforme necessário
};

// Função para carregar as traduções
function loadTranslations(lang) {
    const translation = translations[lang];
    document.getElementById('title').textContent = translation.title;
    document.getElementById('description').textContent = translation.description;
}

// Detecção do idioma do navegador e carregamento das traduções
const userLang = navigator.language || navigator.userLanguage;
loadTranslations(userLang);