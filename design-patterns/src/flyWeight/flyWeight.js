
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}
const isbnNumbers = new Set();

const createBook = (title,author,isbn) => {
    const existingBook = isbnNumbers.has(isbn);
    if(existingBook){
        return existingBook;
    }
    const book = new Book(title,author,isbn);
    isbnNumbers.add(isbn);
    return book;
}

const booklist = [];

export const addBook = (title,author,isbn,availibility,sales) => {
    const book = {
        ...createBook(title,author,isbn),
        sales,
        availibility
    }
    booklist.push(book);
    return book;
}

addBook('Harry potter','JK Rowling','A123',false,100);
addBook('Harry potter','JK Rowling','A123',true,50);
addBook('Lorem ipsum','Jhon Doe','B123',false,100);
addBook('Lorem ipsum','Jhon Doe','B123',true,50);

console.log(booklist.length,'==============amount of copies');
console.log(isbnNumbers.size,'==============totla amount of books');
