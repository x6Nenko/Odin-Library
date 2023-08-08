const shelf = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary(input) {
    const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet');
    myLibrary.push(theHobbit);
};

function updateShelf() {
    const bookElement = document.createElement('div');
    shelf.appendChild(bookElement).classList.add("bookElement");
};

addBookToLibrary();
console.log(myLibrary);