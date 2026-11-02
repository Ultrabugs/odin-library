const myLibrary = [];

function Book(id, title, author, pages, haveRead) {
    this.id = id;
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.haveRead = haveRead;

}

function addBookToLibrary(title, author, pages, haveRead) {
    // get a uuid
    const bookUUID = self.crypto.randomUUID();
    const book1 = new Book(bookUUID, title, author, pages, haveRead);
    myLibrary.push(book1);
     
}


Book.prototype.editBook = function() {
    if(this.haveRead === "unread") {
        this.haveRead = "read";
        console.log(`${this.title} was unread its now ${this.haveRead}`);
    } else if (this.haveRead === "read") {
        this.haveRead = "unread";
        console.log(`${this.title} was read its now ${this.haveRead}`);
    }

    console.log(`object status = ${this.haveRead}`);
}

addBookToLibrary("Bug Hunter", "Bewgsy", 864, "unread");
addBookToLibrary("Web Security Basics", "bewgsy", 943, "read");
addBookToLibrary("Privacy Basics", "Odin", 230, "read");
addBookToLibrary("Social Media Hygiene", "Odin", 400, "unread");

function deleteBook() {

}

function addBook(title, author, pages, read) {
    
    const booklet = new Book(self.crypto.randomUUID(), title, author, pages, read);
    myLibrary.push(booklet);
    console.log(booklet);
    
    const container = document.querySelector('.book-output');
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const bookIdElement = document.createElement("p");
    bookIdElement.textContent = `${booklet.id}`;
    bookIdElement.classList = "hide-me";

    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${booklet.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author - ${booklet.author}`;

    const pageNumberElement = document.createElement("p");
    pageNumberElement.textContent = `Book contains 📄 - ${booklet.pages} pages.`; 

    const userReadElement = document.createElement("p");
    userReadElement.textContent = `${booklet.haveRead}`;
    userReadElement.classList = "have-read";

    console.log(booklet);

    userReadElement.addEventListener("click", function() {
        console.log(userReadElement.textContent);
        console.log("clicked"); 
        console.log(`this.read === ${booklet.haveRead}`);
        if(userReadElement.textContent === "unread") {
                userReadElement.textContent = "read";
                booklet.editBook();
                
            } else if (userReadElement.textContent === "read") {
                userReadElement.textContent = "unread";
                console.log(userReadElement.textContent);
                booklet.editBook();
            }
       
    });

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.classList = "delete";

    deletebutton.addEventListener("click", function(e) {
        console.log(`deleting ${e.target}`);

        const indexOfBook = myLibrary.findIndex(function(item) {
                return item.id === booklet.id
        });
        
        myLibrary.splice(indexOfBook, 1);
         
        cell.remove();
        
    })

    cell.append(bookIdElement, titleElement, authorElement, pageNumberElement, userReadElement, deletebutton);
    container.append(cell);

}
 

function loadBooks() {
    for(const book of myLibrary) {

        const container = document.querySelector('.book-output');
        
        const cell = document.createElement("div"); 
        cell.classList.add("cell");

        const uuidBlock = document.createElement("p");
        uuidBlock.textContent = `${book.id}`;
        uuidBlock.classList = "hide-me";

        const titleBlock = document.createElement("p");
        titleBlock.textContent = `Title: ${book.title}`;

        const authorBlock = document.createElement("p");
        authorBlock.textContent = `Author - ${book.author}`;
        
        const pageBlock = document.createElement("p");
        pageBlock.textContent = `Book contains 📄 - ${book.pages} pages.`; 

        const readBlock = document.createElement("p");
        readBlock.textContent = `${book.haveRead}`;
        readBlock.classList = "have-read";

        readBlock.addEventListener("click", function() {
        console.log(readBlock.textContent);
        console.log("clicked"); 
        if(readBlock.textContent === "unread") {
                readBlock.textContent = "read";
                console.log(readBlock.textContent);
                book.editBook();
                
            } else if (readBlock.textContent === "read") {
                readBlock.textContent = "unread";
                console.log(readBlock.textContent);
                book.editBook();
            }
       
        });
        
        const deleteButtonBlock = document.createElement("button");
        deleteButtonBlock.textContent = "delete";
        deleteButtonBlock.classList = "delete";

        deleteButtonBlock.addEventListener("click", function(e) {
            const indexOfBook = myLibrary.findIndex(function(item) {
                return item.id === book.id
            });

            console.log(`checking ${indexOfBook}`);
             
            console.log(`deleting ${e.target}`);
            console.log(myLibrary.indexOf(book.id));
            myLibrary.splice(indexOfBook, 1);
            cell.remove();
            
        });

        cell.append(uuidBlock, titleBlock, authorBlock, pageBlock, readBlock, deleteButtonBlock);
        container.append(cell);
    }
        
}

loadBooks();

const addBookButton = document.querySelector('.frm-btn');
const titleContent = document.querySelector('.title');
const authorContent = document.querySelector('.author');
const pagesContent = document.querySelector('.pages');
const readContent = document.querySelector('.read');
    
addBookButton.addEventListener('click', function(e){

    e.preventDefault();
    console.log(myLibrary)
    addBook(titleContent.value, authorContent.value, pagesContent.value, readContent.value);

});