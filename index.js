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
    myLibrary.forEach(book => {
        const bookElement = document.createElement("div");
        shelf.appendChild(bookElement).classList.add("book-element");

        bookElement.appendChild(document.createElement("p")).classList.add("book-title");
        document.querySelector(".book-title").innerText = `${book.title}`;

        bookElement.appendChild(document.createElement("p")).classList.add("book-author");
        document.querySelector(".book-author").innerText = `${book.author}`;

        bookElement.appendChild(document.createElement("p")).classList.add("book-pages");
        document.querySelector(".book-pages").innerText = `${book.pages}`;

        bookElement.appendChild(document.createElement("p")).classList.add("book-read");
        document.querySelector(".book-read").innerText = `${book.read}`;
    });
};

addBookToLibrary();
updateShelf();
console.log(myLibrary);