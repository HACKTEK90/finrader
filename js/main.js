// Load sidebar content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <h3>Documentation</h3>
            <ul class="sidebar-menu">
                <li class="menu-header">Getting Started</li>
                <li><a href="../docs/getting-started/index.html">Introduction</a></li>
                <li><a href="../docs/getting-started/setup.html">Setup Guide</a></li>
                
                <li class="menu-header">Features</li>
                <li><a href="../docs/features/dashboard.html">Dashboard</a></li>
                <li><a href="../docs/features/budgeting.html">Budgeting</a></li>
                <li><a href="../docs/features/investments.html">Investments</a></li>
                
                <li class="menu-header">API</li>
                <li><a href="../docs/api/authentication.html">Authentication</a></li>
                <li><a href="../docs/api/endpoints.html">Endpoints</a></li>
            </ul>
        `;
    }

    // Add active class to current page in nav
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Syntax highlighting (Prism.js)
    if (document.querySelector('pre code')) {
        const prismCSS = document.createElement('link');
        prismCSS.rel = 'stylesheet';
        prismCSS.href = 'css/prism.css';
        document.head.appendChild(prismCSS);
        
        const prismJS = document.createElement('script');
        prismJS.src = 'js/prism.js';
        document.body.appendChild(prismJS);
    }
});

// Search functionality
function initSearch() {
    const searchInput = document.createElement('div');
    searchInput.innerHTML = `
        <div class="search-box">
            <input type="text" placeholder="Search documentation...">
            <button><i class="fas fa-search"></i></button>
        </div>
    `;
    document.querySelector('header').appendChild(searchInput);
}
