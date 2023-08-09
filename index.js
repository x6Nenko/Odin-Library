const shelf = document.querySelector("main");
const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const deleteBookBtn = document.querySelectorAll(".deleteBtn");
const coverInput = document.getElementById("cover");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numOfPagesinput = document.getElementById("pages");
const stateSelectInput = document.getElementById("stateSelect");
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
    listenToDeleteBtn();
};

function updateShelf() {
    const currentShelf = document.querySelectorAll(".book-element");
    currentShelf.forEach(book => {
        book.remove();
    });

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement("div");
        shelf.appendChild(bookElement).classList.add("book-element");
        bookElement.setAttribute("data-id", `${index}`)

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

        bookElement.appendChild(document.createElement("button")).classList.add("deleteBtn");
        const deleteBtn = document.querySelectorAll(".deleteBtn");
        deleteBtn[deleteBtn.length - 1].innerText = `Delete book`;

        bookElement.appendChild(document.createElement("div")).classList.add("input-container");
        const inputContainer = document.querySelectorAll(".input-container");
        inputContainer[inputContainer.length - 1].appendChild(document.createElement("label")).htmlFor = `switchState${index}`;
        inputContainer[inputContainer.length - 1].appendChild(document.createElement("select")).id = `switchState${index}`;
        const latestSelect = document.querySelectorAll("select");
        const selectOption1 = document.createElement("option");
        selectOption1.value = "Want to read";
        selectOption1.text = "Want to read";
        selectOption1.value === myLibrary[index].read ? selectOption1.setAttribute("selected" , "selected") : null;
        const selectOption2 = document.createElement("option");
        selectOption2.value = "Currently reading";
        selectOption2.text = "Currently reading";
        selectOption2.value === myLibrary[index].read ? selectOption2.setAttribute("selected" , "selected") : null;
        const selectOption3 = document.createElement("option");
        selectOption3.value = "Read";
        selectOption3.text = "Read";
        selectOption3.value === myLibrary[index].read ? selectOption3.setAttribute("selected" , "selected") : null;
        latestSelect[latestSelect.length -1].appendChild(selectOption1);
        latestSelect[latestSelect.length -1].appendChild(selectOption2);
        latestSelect[latestSelect.length -1].appendChild(selectOption3);
        latestSelect[latestSelect.length -1].addEventListener("click", function(e) {
            console.log(myLibrary[index]);
            myLibrary[index].read = e.target.value;
            console.log(myLibrary[index]);
        });
    });
};

addBookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let chosenReadState = "";
    
    addBookToLibrary(coverInput.value, titleInput.value, authorInput.value, numOfPagesinput.value, stateSelectInput.value);
});

addBookBtn.addEventListener("click", function() {
    const inputsWrapperElement = document.querySelector(".inputs-wrapper");
    inputsWrapperElement.classList.toggle("active");
});

function listenToDeleteBtn() {
    const deleteBookBtn = document.querySelectorAll(".deleteBtn");
    deleteBookBtn.forEach(book => {
        book.addEventListener("click", function(e) {
            const triggeredBook = e.target.parentElement;
            const bookIndex = triggeredBook.getAttribute("data-id");
            deleteBook(bookIndex);
        });
    });
};

function deleteBook(index) {
    myLibrary.splice(index, 1);
    updateShelf();
    listenToDeleteBtn();
};