const bookendpoint = 'http://localhost:3000/book';
const form = document.querySelector('form');
const booklist = document.querySelector('.book-list');
const theme = document.querySelector('link');
let dropdownoption = document.querySelector('select');

dropdownoption.addEventListener('change', () => {
    let selectedoption =
        dropdownoption.options[dropdownoption.selectedIndex].value;
    if (selectedoption == '1') {
        theme.setAttribute(
            'href',
            'https://bootswatch.com/4/minty/bootstrap.min.css'
        );
    } else if (selectedoption == '2') {
        theme.setAttribute(
            'href',
            'https://bootswatch.com/4/yeti/bootstrap.min.css'
        );
    } else if (selectedoption == '3') {
        theme.setAttribute(
            'href',
            'https://bootswatch.com/4/superhero/bootstrap.min.css'
        );
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    let bookdata = new FormData(form);
    let name = bookdata.get('name').trim();
    let genre = bookdata.get('genre').trim();
    let Author = bookdata.get('author').trim();
    let Year = bookdata.get('year').trim();

    let Book = {
        name,
        genre,
        Author,
        Year
    };

    console.log(Book);
    addbook(Book);
    form.reset();
});

let bookitem = '';
getbooks()
    .then(books => {
        for (const book of books) {
            bookitem += `<li class="list-group-item" data-id="${book._id}">
            ${book.name}<small>
            <sup>${book.genre}</sup>
             </small>
            </li>`;
        }
        booklist.innerHTML = `<ul class="list-group">${bookitem}</ul>`;
    })
    .catch(err => console.log(err));

async function getbooks() {
    let response = await fetch(bookendpoint);
    let json = await response.json();
    return json;
}

function addbook(book) {
    fetch(bookendpoint, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(book => {
            alert('Success', 'Book Added Successfully', 'success');
            bookitem += `<li class="list-group-item" data-id="${
                book.name
            }">${book.name.trim()}<small><sup>${book.genre}</sup></small></li>`;
            booklist.innerHTML = `<ul class="list-group">${bookitem}</ul>`;
        });
}

function alert(title, message, type) {
    swal({
        title: title,
        text: message,
        icon: type
    });
}
