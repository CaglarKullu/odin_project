let myLibrary = []

class Book {
    constructor(id,title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

// Refactor the addBookToLibrary method to be a static method that takes a book instance
Book.addBookToLibrary = function(book) {
    myLibrary.push(book);
};

// This static method is no longer needed as we can directly use the constructor
Book.newBook = function(title, author, pages, read) {
    return new Book(title, author, pages, read);
}

// function to add a book to the library
function addNewBookToLibrary(title, author, pages, read) {
    const newBook = Book.newBook(title, author, pages, read);
    Book.addBookToLibrary(newBook);
};

addNewBookToLibrary(1,'title', 'author', 'pages', 'read');

addNewBookToLibrary(2,'title', 'author', 'pages', 'read');

console.log(myLibrary);

// DOM manipulation functions 
function addBookToLibrary() {
  const library = document.getElementById('library'); 
  myLibrary.forEach(book => {
    console.log('creating new book');
    const bookElement = document.createElement('div'); 
    bookElement.innerText = book.title; 
    library.appendChild(bookElement); 
  })
}

function deleteBookFromLibrary(bookId) {
  // delete book from library logic
  newLibrary = myLibrary.filter(book => book.id !== bookId);
  myLibrary = newLibrary;
}

//toggle read status
function toggleReadStatus(book) {
    book.read = !book.read;
}

function showAllBooksInLibrary() {
  const library = document.getElementById('library'); // select the library element
  library.innerHTML = ''; // clear the library before showing all books

  myLibrary.forEach(book => {
    const bookElement = document.createElement('div'); // create a new div for each book
    bookElement.innerText = book.title; // set the text to the book's title
    library.appendChild(bookElement); // append the new div to the library
  });
}

function showUnreadBooksOnly() {
  // show unread books only logic

}

function showReadBooksOnly() {
  // show read books only logic

}

function clearLibrary() {
  // clear library logic
}

// DOM event listeners
document.addEventListener('DOMContentLoaded', () => {
    // event listener for show all books
    showAllBooksInLibrary();
    deleteBookFromLibrary(2);
    const booksContainer = document.querySelector('.books');
    booksContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('material-icons')) {
            const action = event.target.getAttribute('data-action');
            const bookId = event.target.getAttribute('data-id');
            switch (action) {
                case 'share':
                  console.log('button pressed');
                  shareProject(bookId);
                  break;
                case 'delete':
                  deleteProject(bookId);
                  break;
                case 'favorite':
                    toggleReadStatus(event.target);
                  break;
              }
            
        }
    })
    // event listener for add book
    const addBookBtn = document.getElementById('add-book-btn');
    addBookBtn.addEventListener('click', () => {
        addBookToLibrary();
    });

    // event listener for delete book
    const deleteBookBtn = document.getElementById('delete-book-btn');
    deleteBookBtn.addEventListener('click', () => {
        deleteBookFromLibrary();
    });

    // event listener for mark as read
    const markAsReadBtn = document.getElementById('mark-as-read-btn');

});

// event listener for add book
document.addEventListener('DOMContentLoaded', () => {

})

