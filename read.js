// Массив с текстом книги (просто для демонстрации)
const bookText = [
    "Это текст страницы 1",
    "Это текст страницы 2",
    "Это текст страницы 3",
    // Добавьте здесь остальные страницы книги
];

let currentPage = 0; // Текущая страница

const bookContent = document.getElementById('book-content');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');

// Функция для отображения текущей страницы
function showPage(pageNumber) {
    bookContent.textContent = bookText[pageNumber];
}

// Инициализация страницы
showPage(currentPage);

// Обработчики событий для кнопок "Предыдущая страница" и "Следующая страница"
prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < bookText.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});
