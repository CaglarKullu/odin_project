const myLibrary = []

class Book {
    constructor(title, author, pages, read) {
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

addNewBookToLibrary('title', 'author', 'pages', 'read');

addNewBookToLibrary('title', 'author', 'pages', 'read');

console.log(myLibrary);