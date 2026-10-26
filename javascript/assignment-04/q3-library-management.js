
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`${this.title} issued successfully.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`${this.title} returned successfully.`);
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "Alice", "102"),
    new Book("Web Development", "David", "103")
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAvailable Books:");

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ISBN: ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

// Issue a book by ISBN
const enteredISBN = "102";
issueBookByISBN(enteredISBN);

displayAvailableBooks();

// Return the book
const issuedBook = books.find(book => book.ISBN === enteredISBN);
issuedBook.returnBook();

displayAvailableBooks();
