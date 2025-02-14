
// Thea 

// Hamburger menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Sidebar funktioner
function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
    sidebar.style.animation = 'slideIn 0.3s forwards';
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.animation = 'slideOut 0.3s forwards';
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}

