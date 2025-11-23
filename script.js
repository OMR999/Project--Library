const myLibrary = [];

function book(title,author,pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
  let id = crypto.randomUUID();
  myLibrary.push(new book(title, author, pages, id));
}

addBookToLibrary("I am strong independent woman", "ana kaddaba", 100000);
console.table(myLibrary);