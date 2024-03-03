const myLibrary = {
    
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // This static method is no longer needed as we can directly use the constructor
};

// Refactor the addBookToLibrary method to be a static method that takes a book instance
Book.addBookToLibrary = function(book) {
    if (!Array.isArray(myLibrary)) {
        console.error('myLibrary is not an array.');
        return;
    }
    myLibrary.push(book);
};

// This static method is no longer needed as we can directly use the constructor
Book.newBook = function(title, author, pages, read) {
    return new Book(title, author, pages, read);
}

// function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = Book.newBook(title, author, pages, read);
    newBook.addBookToLibrary();
};

