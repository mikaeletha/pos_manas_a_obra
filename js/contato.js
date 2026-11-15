document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whatsapp-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const servico = document.getElementById('servico').value;
        const detalhes = document.getElementById('detalhes').value.trim();

        const numeroWhatsApp = "5531999999999"; 

        const textoMensagem = 
            `*Olá, Manas à Obra! Gústaria de solicitar um orçamento.*\n\n` +
            `*Nome:* ${nome}\n` +
            `*Telefone:* ${telefone}\n` +
            `*Serviço:* ${servico}\n` +
            `*Detalhes:* ${detalhes}`;

        const mensagemCodificada = encodeURIComponent(textoMensagem);

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(urlWhatsApp, '_blank');
    });
});