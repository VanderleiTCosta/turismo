document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links que apontam para âncoras internas (#)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Pega o id do elemento alvo (ex: #plans)
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Rola a página suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // --- LÓGICA PARA O TEMA DARK/LIGHT ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Verifica o tema salvo no localStorage ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Evento de clique no botão
    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (body.classList.contains('dark-mode')) {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        // Salva a preferência do usuário no localStorage
        localStorage.setItem('theme', newTheme);
    });

});