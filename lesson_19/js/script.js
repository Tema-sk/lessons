// Чекаємо, поки завантажиться весь HTML-документ
document.addEventListener('DOMContentLoaded', function () {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');

    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            // Перемикаємо класи
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            // Блокуємо скрол фону
            document.body.classList.toggle('_lock');
        });
    }
});