document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
});

function renderNavbar() {
    const headerContainer = document.getElementById('header-navbar');
    if (!headerContainer) return;

    const menuItems = [
        { label: 'Home', href: 'home.html', active: true },
        { label: 'Sobre Nós', href: 'sobre.html', active: true },
        { label: 'Serviços', href: 'servicos.html', active: true },
        { label: 'Contato', href: 'contato.html', active: true }
    ];

    const navHTML = `
        <nav class="navbar navbar-expand-lg sticky-top custom-navbar">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center gap-2" href="home.html">
                    <img src="../assets/logo-manas-a-obra.png" alt="Logo Manas à Obra" height="40" class="rounded-2 logo-site">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                        ${menuItems.map(item => `
                            <li class="nav-item">
                                <a class="nav-link ${item.active ? 'active' : ''}" href="${item.href}">${item.label}</a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </nav>
    `;

    headerContainer.innerHTML = navHTML;
}