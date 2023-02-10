const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(new Book('"The Handmaid\'s Tale"', 'Margaret Atwood', `Pages: ${311}`, false));
}

const libDisplay = document.querySelector('.collection');
const addButton = document.querySelector('.add-button');

addBookToLibrary();

myLibrary.forEach((book, i) => {
  const bookPanel = libDisplay
    .appendChild(
      Object.assign(
        document.createElement('div'),
        { className: 'book-panel' },
      ),
    );

  Object.values(book).forEach((prop) => {
    bookPanel.appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: 'book-info',
          innerHTML: prop,
        },
      ),
    );
  });

  bookPanel.appendChild(
    Object.assign(
      document.createElement('div'),
      {
        className: 'remove-button',
        innerHTML: 'Remove',
      },
    ),
  );
});
