const myLibrary = {
    
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }   

    addBookToLibrary() {
        // Ensure myLibrary is an array before pushing new Book
        if (!Array.isArray(myLibrary)) {
            console.error('myLibrary is not an array.');
            return;
        }
        myLibrary.push(this);
    }
}

