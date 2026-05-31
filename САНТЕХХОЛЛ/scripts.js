// Навигация между страницами сайта Сантеххолл

document.addEventListener('DOMContentLoaded', function() {
    
    // Определяем текущую страницу
    const currentPage = window.location.pathname.split('/').pop() || 'главная.html';
    
    // --- ОБЩИЙ КОД ДЛЯ ВСЕХ СТРАНИЦ ---
    
    // Находим все ссылки в навигации и устанавливаем правильные href
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        const text = link.textContent.trim();
        if (text === 'Каталог') {
            link.href = 'Каталог.html';
        } else if (text === 'Акции') {
            link.href = '#'; // Страница акций пока не создана
        } else if (text === 'О компании') {
            link.href = 'О компании.html';
        }
    });
    
    // Кнопка Корзина в шапке
    const cartBtn = document.querySelector('.header .btn-cart');
    if (cartBtn) {
        cartBtn.href = 'Корзина.html';
    }
    
    // Логотип в шапке - переход на главную
    const headerLogo = document.querySelector('.header .logo');
    if (headerLogo) {
        headerLogo.style.cursor = 'pointer';
        headerLogo.addEventListener('click', function() {
            window.location.href = 'главная.html';
        });
    }
    
    // Логотип в футере - переход на главную
    const footerLogo = document.querySelector('.footer .logo');
    if (footerLogo) {
        footerLogo.style.cursor = 'pointer';
        footerLogo.addEventListener('click', function() {
            window.location.href = 'главная.html';
        });
    }
    
    // --- ОБРАБОТЧИК КНОПОК ДОБАВЛЕНИЯ В КОРЗИНУ ---
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Переход на страницу корзины при нажатии на кнопку корзины в карточке товара
            window.location.href = 'Корзина.html';
        });
    });
    
});
