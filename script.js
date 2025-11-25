const myLibrary = [];

const body = document.body;
const list = document.createElement("ul");
body.appendChild(list);

function book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = id;
  this.toggle = function () {
    this.isRead = !this.isRead;
  };
}
function addNewBook(book) {
  let temp = document.createElement("li");
  let text = document.createElement("p");
  let isRead;
  if (book.isRead) isRead = "is readed";
  else isRead = "isnt readed";
  text.textContent = `${book.title} by ${book.author}, ${book.pages} pages, and ${isRead}.id: ${book.id}`;
  temp.id = book.id;
  let button = document.createElement("button");
  button.textContent = "Remove";
  button.addEventListener("click", (e) => {
    myLibrary.splice(
      myLibrary.findIndex((item) => {
        return item.id == e.target.parentNode.id;
      }),
      1
    );
    let temp = document.getElementById(e.target.parentNode.id);
    temp.remove();
  });

  let toggleBtn = document.createElement("button");
  toggleBtn.textContent = "toggle";
  toggleBtn.addEventListener("click", (e) => {
    let temp = myLibrary.find((item) => {
      return item.id == e.target.parentNode.id;
    });
    temp.toggle();
    let isRead;
    if (temp.isRead) isRead = "is readed";
    else isRead = "isnt readed";
    document.getElementById(
      e.target.parentNode.id
    ).querySelector("p").textContent = `${temp.title} by ${temp.author}, ${temp.pages} pages, and ${isRead}.id: ${temp.id}`;
  });
  temp.appendChild(text);
  temp.appendChild(button);
  temp.appendChild(toggleBtn);
  list.appendChild(temp);
}

function addBookToLibrary(title, author, pages, isRead) {
  let id = crypto.randomUUID();
  let newBook = new book(title, author, pages, isRead, id);
  addNewBook(newBook);
  myLibrary.push(newBook);
}

// EXCUTABLE PART OF THE CODE
// -----------------------------------------------------------------------

// if there are books already in myLibrary array
// for (let book of myLibrary) {
// addNewBook(book);
// }

addBookToLibrary("I am strong independent woman", "ana kaddaba", 100000);

const addNewBookBtn = document.querySelector(".btn-primary");

addNewBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").checked;
  console.log(isRead);
  if (title == "" || author == "" || pages == "")
    alert("please fill the empty fields");
  else addBookToLibrary(title, author, pages, isRead);
});
