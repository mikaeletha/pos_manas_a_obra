// Função global chamada ao clicar em "Solicitar Orçamento" nos cards
function abrirModalOrcamento(nomeServico, descricaoDetalhe) {
    const tituloElement = document.getElementById('modal-servico-titulo');
    const descElement = document.getElementById('modal-servico-descricao');
    const whatsappLink = document.getElementById('modal-whatsapp-link');
    
    if (!tituloElement || !descElement || !whatsappLink) return;

    // Personaliza os textos com base no serviço clicado
    tituloElement.textContent = `Orçamento para: ${nomeServico}`;
    descElement.textContent = `Você demonstrou interesse em: ${descricaoDetalhe}. Fale conosco diretamente pelo WhatsApp para alinharmos os detalhes, prazos e valores com total segurança!`;

    // Monta a mensagem pré-formatada para o WhatsApp
    const mensagemWhatsApp = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para o serviço de: ${nomeServico}. Podem me ajudar?`);
    whatsappLink.href = `https://wa.me/5531999999999?text=${mensagemWhatsApp}`;

    // Dispara a abertura do modal usando o Bootstrap
    const modalElement = document.getElementById('modalOrcamento');
    const modalBootstrap = new bootstrap.Modal(modalElement);
    modalBootstrap.show();
}