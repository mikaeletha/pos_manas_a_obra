// Dados separados dos depoimentos
const depoimentosData = [
    {
        texto: "Contratei para trocar algumas tomadas e instalar lustres. O atendimento foi impecável, super cuidadosas e limparam tudo depois. Recomendo de olhos fechados!",
        autora: "Mariana Souza",
        local: "Belo Horizonte - MG"
    },
    {
        texto: "Finalmente encontrei profissionais de confiança para pintar minha sala. O acabamento ficou perfeito e me senti super segura recebendo a equipe em casa.",
        autora: "Camila Ribeiro",
        local: "Nova Lima - MG"
    },
    {
        texto: "Instalaram meus móveis e prateleiras com uma agilidade incrível. É maravilhoso ver mulheres brilhando e fazendo um trabalho tão técnico e caprichado.",
        autora: "Juliana Mendes",
        local: "Belo Horizonte - MG"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    popularDepoimentos();
});

function popularDepoimentos() {
    const carouselInner = document.getElementById('depoimentos-inner');
    const carouselIndicators = document.getElementById('depoimentos-indicators');
    
    if (!carouselInner || !carouselIndicators) return;

    // Limpa os containers por segurança
    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // Popula o carrossel e os indicadores percorrendo o array de dados
    depoimentosData.forEach((dep, index) => {
        // 1. Cria o indicador (barrinha/pontinho)
        const indicatorButton = document.createElement('button');
        indicatorButton.type = 'button';
        indicatorButton.setAttribute('data-bs-target', '#carrosselDepoimentos');
        indicatorButton.setAttribute('data-bs-slide-to', index);
        indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
        
        if (index === 0) {
            indicatorButton.className = 'active';
            indicatorButton.setAttribute('aria-current', 'true');
        }
        carouselIndicators.appendChild(indicatorButton);

        // 2. Cria o item do carrossel (slide)
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        itemDiv.innerHTML = `
            <div class="p-3 bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                    <div class="text-warning mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <p class="text-secondary fst-italic mb-3">"${dep.texto}"</p>
                </div>
                <div>
                    <h5 class="text-dark-purple fw-bold mb-0">${dep.autora}</h5>
                    <small class="text-muted">${dep.local}</small>
                </div>
            </div>
        `;

        carouselInner.appendChild(itemDiv);
    });
}