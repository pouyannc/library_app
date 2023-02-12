const myLibrary = [];
const libDisplay = document.querySelector('.collection');

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function toggleRead(e) {
  const readText = e.target.textContent;
  if (readText === 'Read ✔') {
    e.target.textContent = 'Not read';
  } else if (readText === 'Not read') {
    e.target.textContent = 'Read ✔';
  }
}

function removeBook(e) {
  const book = e.srcElement.parentElement.parentElement;
  myLibrary.splice(book.dataset.index, 1);
  book.remove();
  document.querySelectorAll('.book-panel').forEach((p, i) => { p.dataset.index = i; });
}

function createBookPanel(book) {
  const bookPanel = libDisplay
    .appendChild(
      Object.assign(document.createElement('div'), { className: 'book-panel' }),
    );

  bookPanel.setAttribute('data-index', `${myLibrary.length - 1}`);

  const infoContainer = bookPanel
    .appendChild(
      Object.assign(document.createElement('div'), { className: 'info-container' }),
    );

  Object.values(book).forEach((prop, i) => {
    infoContainer.appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: 'book-info',
          id: `info-line-${i + 1}`,
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

  document.querySelectorAll('#info-line-4').forEach((b) => b.addEventListener('click', toggleRead));
  document.querySelectorAll('.remove-button').forEach((b) => b.addEventListener('click', removeBook));
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function createBook(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const book = new Book(`"${title}"`, author, `Pages: ${pages}`, read ? 'Read ✔' : 'Not read');
  document.querySelector('.book-form-container').reset();
  addBookToLibrary(book);
  createBookPanel(book);
}

document.getElementById('open-form').addEventListener('click', () => { document.querySelector('.book-form').style.display = 'flex'; });
document.getElementById('close-btn').addEventListener('click', () => { document.querySelector('.book-form').style.display = 'none'; });
document.querySelector('.book-form-container').addEventListener('submit', createBook);
