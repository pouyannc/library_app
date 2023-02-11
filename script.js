const myLibrary = [];
const libDisplay = document.querySelector('.collection');

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function removeBook(e) {
  const book = e.srcElement.parentElement.parentElement;
  book.remove();
}

function createBookPanel(book) {
  const bookPanel = libDisplay
    .appendChild(
      Object.assign(document.createElement('div'), { className: 'book-panel' }),
    );

  const infoContainer = bookPanel
    .appendChild(
      Object.assign(document.createElement('div'), { className: 'info-container' }),
    );

  Object.values(book).forEach((prop) => {
    infoContainer.appendChild(
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
        className: 'remove-container',
      },
    ),
  ).appendChild(
    Object.assign(
      document.createElement('div'),
      {
        className: 'remove-button',
        innerHTML: 'Remove',
      },
    ),
  );

  document.querySelectorAll('.remove-button').forEach((b) => b.addEventListener('click', removeBook));
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function createBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  const book = new Book(`"${title}"`, author, `${pages} Pages`, read);
  document.querySelector('.book-form-container').reset();
  addBookToLibrary(book);
  createBookPanel(book);
}

addBookToLibrary();

document.getElementById('open-form').addEventListener('click', () => { document.querySelector('.book-form').style.display = 'flex'; });
document.getElementById('close-btn').addEventListener('click', () => { document.querySelector('.book-form').style.display = 'none'; });
document.getElementById('submit-btn').addEventListener('click', createBook);

// to do: remove book from myLibrary array in remove book function,
// don't allow form to be submitted with empty spaces
