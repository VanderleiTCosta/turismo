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

});