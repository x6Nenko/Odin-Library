const shelf = document.querySelector("main");
const addBookForm = document.getElementById("addBookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numOfPagesinput = document.getElementById("pages");
const wantToReadInput = document.getElementById("want");
const currentlyReadingInput = document.getElementById("reading");
const readInput = document.getElementById("read");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary(title, author, pages, read) {
    const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet');
    let addNewBook = new Book(title, author, pages, read);
    myLibrary.push(addNewBook);
    updateShelf();
};

function updateShelf() {
    const currentShelf = document.querySelectorAll(".book-element");
    currentShelf.forEach(book => {
        book.remove();
    });

    myLibrary.forEach(book => {
        const bookElement = document.createElement("div");
        shelf.appendChild(bookElement).classList.add("book-element");
        console.log(book);

        bookElement.appendChild(document.createElement("p")).classList.add("book-title");
        const title = document.querySelectorAll(".book-title");
        title[title.length - 1].innerText = `${book.title}`

        bookElement.appendChild(document.createElement("p")).classList.add("book-author");
        const author = document.querySelectorAll(".book-author");
        author[author.length - 1].innerText = `${book.author}`;

        bookElement.appendChild(document.createElement("p")).classList.add("book-pages");
        const pages = document.querySelectorAll(".book-pages");
        pages[pages.length - 1].innerText = `${book.pages}`;

        bookElement.appendChild(document.createElement("p")).classList.add("book-read");
        const read = document.querySelectorAll(".book-read");
        read[read.length - 1].innerText = `${book.read}`;


        // bookElement.appendChild(document.createElement("p")).innerText = `${book.title}`;

        // bookElement.appendChild(document.createElement("p")).innerText = `${book.author}`;

        // bookElement.appendChild(document.createElement("p")).innerText = `${book.pages}`;

        // bookElement.appendChild(document.createElement("p")).innerText = `${book.read}`;
    });
};

addBookForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let chosenReadState = "";

    wantToReadInput.checked ? chosenReadState = "Want to read" : null;
    currentlyReadingInput.checked ? chosenReadState = "Currently reading" : null;
    readInput.checked ? chosenReadState = "Read" : null;

    addBookToLibrary(titleInput.value, authorInput.value, numOfPagesinput.value, chosenReadState);
});


console.log(myLibrary);