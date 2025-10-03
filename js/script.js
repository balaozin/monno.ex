// Variáveis para o menu mobile e overlay
let btnAbrirMenu = document.querySelector('.btn-abrir-menu'); 
let menu = document.querySelector('.menu-mobile'); 
let overlayMenu = document.querySelector('.overlay-menu'); 
const body = document.body; // Adicionado para facilitar o acesso ao body

// -----------------------------------------------------
// 1. LÓGICA DO MENU MOBILE (ABRIR, FECHAR E OVERLAY) - CORRIGIDA
// -----------------------------------------------------

// Abrir Menu (Clique no ícone hambúrguer)
btnAbrirMenu.addEventListener('click', () => {
    // Adiciona a classe que faz o menu deslizar
    menu.classList.add('abrir-menu');
    // Ativa o overlay
    overlayMenu.classList.add('ativo'); 
    
    // NOVO: Bloqueia o scroll do fundo
    body.classList.add('scroll-bloqueado'); 
});

// Fechar Menu (usando o botão 'X' dentro do menu)
menu.addEventListener('click', (event) => {
    // Verifica se o clique foi no ícone 'X' que tem o ID 'btn-fechar'
    if (event.target.id === 'btn-fechar') { 
        menu.classList.remove('abrir-menu');
        overlayMenu.classList.remove('ativo'); 
        
        // NOVO: Desbloqueia o scroll do fundo
        body.classList.remove('scroll-bloqueado'); 
    }
});

// Fechar Menu Clicando no Overlay (clicar na área escura)
overlayMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlayMenu.classList.remove('ativo'); 
    
    // NOVO: Desbloqueia o scroll do fundo
    body.classList.remove('scroll-bloqueado'); 
});

// -----------------------------------------------------
// 2. LÓGICA DOS MODAIS (POP-UPS) (mantenha o código de modais que funciona)
// -----------------------------------------------------
// ... (seu código de modal) ...

// -----------------------------------------------------
// 2. LÓGICA DOS MODAIS (POP-UPS) - CORRIGIDA NOVAMENTE
// -----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Função para fechar modal (interna e com remoção da classe do body)
    function fecharModal(modal) {
        modal.classList.remove('ativo');
        
        // Remove a classe que reduz o container
        body.classList.remove('modal-aberto'); 
        
        // NOVO: Desbloqueia o scroll da página de fundo
        body.classList.remove('scroll-bloqueado'); 
    }

    // Função para abrir modal (disparada pelo HTML com onclick)
    window.abrirModal = function(idModal) {
        const modal = document.getElementById(idModal);
        if (modal) {
            modal.classList.add('ativo');
            
            // Adiciona a classe que reduz o container
            body.classList.add('modal-aberto'); 
            
            // NOVO: Bloqueia o scroll da página de fundo
            body.classList.add('scroll-bloqueado'); 
        }
    }

    // O restante da lógica de fechar (botão 'x', clique no fundo)
    // pode permanecer exatamente como está, pois elas chamam a função 'fecharModal'.

    document.querySelectorAll('.fechar-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-projeto');
            if (modal) {
                fecharModal(modal);
            }
        });
    });

    document.querySelectorAll('.modal-projeto').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { 
                fecharModal(modal);
            }
        });
    });
});










// Executa a função na primeira carga da página
setFixedViewportHeight();

// Recalcula se a tela for redimensionada (barras do navegador aparecem/somem)
window.addEventListener('resize', setFixedViewportHeight);