const shelf = document.querySelector("main");
const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const submitBtn = document.querySelector(".submit-btn");
const deleteBookBtn = document.querySelectorAll(".deleteBtn");
const coverInput = document.getElementById("cover");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numOfPagesinput = document.getElementById("pages");
const stateSelectInput = document.getElementById("stateSelect");
const wantToReadInput = document.getElementById("want");
const currentlyReadingInput = document.getElementById("reading");
const readInput = document.getElementById("read");
const overlayBg = document.querySelector(".overlay");

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

        const bookInfo = document.createElement("div");
        bookElement.appendChild(bookInfo).classList.add("book-info");

        bookInfo.appendChild(document.createElement("p")).classList.add("book-title");
        const title = document.querySelectorAll(".book-title");
        title[title.length - 1].innerText = `${book.title}`

        bookInfo.appendChild(document.createElement("p")).classList.add("book-author");
        const author = document.querySelectorAll(".book-author");
        book.author.length > 0 ? author[author.length - 1].innerText = `by ${book.author}` : author[author.length - 1].innerText = `${book.author}`

        bookInfo.appendChild(document.createElement("p")).classList.add("book-pages");
        const pages = document.querySelectorAll(".book-pages");
        book.pages.length > 0 ? pages[pages.length - 1].innerText = `${book.pages} pages` : pages[pages.length - 1].innerText = `${book.pages}`;

        bookInfo.appendChild(document.createElement("select")).id = `switchState${index}`;
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
            myLibrary[index].read = e.target.value;
        });

        bookElement.appendChild(document.createElement("button")).classList.add("deleteBtn");
        const deleteBtn = document.querySelectorAll(".deleteBtn");
        deleteBtn[deleteBtn.length - 1].innerText = `X`;
    });
};

function refreshFormInputs() {
    coverInput.value = "";
    titleInput.value = "";
    authorInput.value = "";
    numOfPagesinput.value = "";
    stateSelectInput.value  = "Want to read";
};

addBookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary(coverInput.value, titleInput.value, authorInput.value, numOfPagesinput.value, stateSelectInput.value);
    refreshFormInputs();
});

function addInitialBooks() {
    addBookToLibrary("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg", "Deep Work: Rules for Focused Success in a Distracted World", "Cal Newport", "296", "Read");
    addBookToLibrary("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1421618636i/30659.jpg", "Meditations", "Marcus Aurelius", "254", "Read");
    addBookToLibrary("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1558216416i/36236124.jpg", "Fight Club", "Chuck Palahniuk", "224", "Read");
    addBookToLibrary("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531891848i/11.jpg", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "216", "Read");
};

addInitialBooks();

function toggleFormDisplaying() {
    const inputsWrapperElement = document.querySelector(".inputs-wrapper");
    inputsWrapperElement.classList.toggle("active");
};

addBookBtn.addEventListener("click", function() {
    toggleFormDisplaying();
    overlayBg.style.display = "block"
});

submitBtn.addEventListener("click", function() {
    toggleFormDisplaying();
    overlayBg.style.display = "none"
});

overlayBg.addEventListener("click", function() {
    toggleFormDisplaying();
    overlayBg.style.display = "none"
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