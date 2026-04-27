document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Evento para abrir/cerrar el sidebar en móviles
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Opcional: cerrar el menú si haces clic fuera (mejora la UX)
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});