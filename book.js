// Объект с информацией о книгах (просто для демонстрации)
//const books = [
  //  {
  //      id: 1,
 //       title: "Название книги 1",
 //       content: "Текст книги 1..."
 //   },
 //   {
  //      id: 2,
  //      title: "Название книги 2",
//content: "Текст книги 2..."
  //  }
    // Добавьте здесь информацию о других книгах
//];

//const bookList = document.getElementById('book-list');
//const bookContent = document.getElementById('book-content');

// Функция для отображения текста выбранной книги
//function showBook(bookId) {
 //   const selectedBook = books.find(book => book.id === parseInt(bookId));
 //   if (selectedBook) {
 //       bookContent.textContent = selectedBook.content;
 //   }
//}

// Обработчик событий для клика по ссылке на книгу
//bookList.addEventListener('click', (event) => {
   // if (event.target.tagName === 'A') {
   //     event.preventDefault();
  //      showBook(event.target.getAttribute('data-book-id'));
   // }
//});

// Инициализация страницы
//bookContent.textContent = "Выберите книгу для чтения";







// Открыть модальное окно с описанием
function openModal(description) {
    const modal = document.getElementById('modal');
    const descriptionElement = document.getElementById('modal-description');
    
    descriptionElement.textContent = description;
    modal.style.display = 'flex'; // Используем flex, чтобы центрировать по вертикали
}

// Закрыть модальное окно
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Обработчики событий для открытия и закрытия модального окна
const books = document.querySelectorAll('.book');
books.forEach((book) => {
    book.addEventListener('click', () => {
        const description = book.querySelector('.description').textContent;
        if (description) {
            openModal(description);
        }
    });
});

document.getElementById('close').addEventListener('click', () => {
    closeModal();
});

// Закрыть модальное окно при клике вне окна
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});





