const bookContainer = document.getElementById('booksContainer');

const addBookHTML = (title, author) => {
  const bookHTML = document.createElement('div');
  bookHTML.classList.add('newBook');
  bookHTML.innerHTML = `
        <p class="title">"${title}" By</p>
        <p class="author">${author}</p>
        <button class="removeButton">Remove</button>
    `;
  bookContainer.appendChild(bookHTML);

  let bookNodes = Array.from(bookContainer.children);
  if (bookNodes.indexOf(bookHTML) % 2 === 0) {
    bookHTML.classList.add('grayStrip');
  }

  bookHTML.children[2].addEventListener('click', () => {
    const newBooks = JSON.parse(localStorage.getItem('storageBooks'));
    bookNodes = Array.from(bookContainer.children);
    newBooks.splice(bookNodes.indexOf(bookHTML), 1);
    localStorage.setItem('storageBooks', JSON.stringify(newBooks));
    bookContainer.removeChild(bookHTML);
  });
};
export default addBookHTML;