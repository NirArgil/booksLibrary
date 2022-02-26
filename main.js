const booksList = document.getElementById('booksList');
const searchBar = document.getElementById('searchBar');
let foundBooks = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value;

//     loadBooks(searchString);
// });

const searchFunc = () => {
  const searchString = searchBar.value;
  loadBooks(searchString)
}

const loadBooks = async (searchString) => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&key=AIzaSyBbT1JQ2RTyHKMFbJIDIFZG3q6e82KDLHc`);
    foundBooks = await res.json();
    console.log(foundBooks.items);
    displayBooks(foundBooks.items);

  } catch (err) {
    console.error(err);
  }
};

const displayBooks = (books) => {
  const htmlString = books
    .map((book) => {
      return `<li class="book">
                <h2>${book.volumeInfo.title}</h2>
                <p>${book.volumeInfo.description?.substring(0, 300)}</p>
                <img src="${book.volumeInfo.imageLinks?.thumbnail}" />
            </li>`;
    })

  booksList.innerHTML = htmlString;
};