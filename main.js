// Obtém todos os links de navegação
const menuLinks = document.querySelectorAll('.link_menu');

// Função para adicionar a classe "active" ao link correto
function setActiveLink() {
    let scrollPosition = window.scrollY;

    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));

        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Chama a função ao rolar a página
window.addEventListener('scroll', setActiveLink);

// Chama a função ao carregar a página para garantir que o link ativo seja destacado corretamente
document.addEventListener('DOMContentLoaded', setActiveLink);


