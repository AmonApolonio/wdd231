document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    mobileMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    document.querySelector('.close-button').addEventListener('click', () => {
        document.querySelector('.mobile-menu').style.display = 'none';
    });
});
