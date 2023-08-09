const shelf = document.querySelector("main");
const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const coverInput = document.getElementById("cover");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numOfPagesinput = document.getElementById("pages");
const wantToReadInput = document.getElementById("want");
const currentlyReadingInput = document.getElementById("reading");
const readInput = document.getElementById("read");

let myLibrary = [];

function Book(cover, title, author, pages, read) {
    this.cover = cover
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary(cover, title, author, pages, read) {
    const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet');
    let addNewBook = new Book(cover, title, author, pages, read);
    myLibrary.unshift(addNewBook);
    updateShelf();
};

function updateShelf() {
    const currentShelf = document.querySelectorAll(".book-element");
    currentShelf.forEach(book => {
        book.remove();
    });

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement("div");
        shelf.appendChild(bookElement).classList.add("book-element");
        bookElement.setAttribute("data-id", `Book${index}`)

        bookElement.appendChild(document.createElement("img")).classList.add("book-cover");
        const cover = document.querySelectorAll(".book-cover");
        cover[cover.length - 1].src = `${book.cover}`;
        cover[cover.length - 1].alt = `Book cover`;

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
    
    addBookToLibrary(coverInput.value, titleInput.value, authorInput.value, numOfPagesinput.value, chosenReadState);
});

addBookBtn.addEventListener("click", function() {
    const inputsWrapperElement = document.querySelector(".inputs-wrapper");
    inputsWrapperElement.classList.toggle("active");
});


console.log(myLibrary);