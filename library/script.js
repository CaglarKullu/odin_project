// data and util

let myLibrary = [];

class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    static addBookToLibrary(book) {
        myLibrary.push(book);
    }
}

function addNewBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, read);
    Book.addBookToLibrary(newBook);
}

function deleteBookFromLibrary(bookId) {
    myLibrary = myLibrary.filter(book => book.id !== bookId);
}

function toggleReadStatus(bookId) {
    const book = myLibrary.find(book => book.id === bookId);
    if (book) book.read = !book.read;
}

// DOM Manipulation
function showAllBooksInLibrary() {
  const library = document.getElementById('library');
  library.innerHTML = ''; // Clear the library before showing all books

  myLibrary.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');

      // Title
      const titleElement = document.createElement('h3');
      titleElement.innerText = `Title: ${book.title}`;
      bookElement.appendChild(titleElement);

      // Author
      const authorElement = document.createElement('p');
      authorElement.innerText = `Author: ${book.author}`;
      bookElement.appendChild(authorElement);

      // Pages
      const pagesElement = document.createElement('p');
      pagesElement.innerText = `Pages: ${book.pages}`;
      bookElement.appendChild(pagesElement);

      // Read status
      const readElement = document.createElement('p');
      readElement.innerText = `Read: ${book.read ? 'Yes' : 'No'}`;
      bookElement.appendChild(readElement);

      // Optional: Add a toggle read status button
      const toggleReadBtn = document.createElement('button');
      toggleReadBtn.innerText = 'Toggle Read Status';
      toggleReadBtn.addEventListener('click', () => {
          toggleReadStatus(book.id);
          showAllBooksInLibrary(); // Refresh the library display
      });
      bookElement.appendChild(toggleReadBtn);

      // Optional: Add a delete book button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', () => {
          deleteBookFromLibrary(book.id);
          showAllBooksInLibrary(); // Refresh the library display
      });
      bookElement.appendChild(deleteBtn);

      library.appendChild(bookElement);
  });
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

function addBookFromPopup() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = false; // Assuming new books are unread by default

  // Use the library length as a simple ID generator
  const newBook = new Book(myLibrary.length + 1, title, author, pages, read);
  Book.addBookToLibrary(newBook);

  // Clear input fields and hide the popup
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  hidePopup();

  // Refresh the displayed books
  showAllBooksInLibrary();
}

// event listeners

document.addEventListener('DOMContentLoaded', () => {
  // Example of setting up event listeners for adding books and other actions
  const addBookBtn = document.getElementById('add-book-btn');
  if (addBookBtn) {
      addBookBtn.addEventListener('click', showPopup);
  }

  const addBookForm = document.getElementById('add-book-form');
  if (addBookForm) {
      addBookForm.addEventListener('submit', (event) => {
          event.preventDefault();
          addBookFromPopup();
      });
  }

  showAllBooksInLibrary();
});
