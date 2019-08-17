let form = document.getElementById('myform');
let container = document.getElementById('img-container');

form.addEventListener('submit', e => {
    e.preventDefault();
    var data = new FormData(form);
    let searchterm = data.get('search');
    if (searchterm == '') {
        Message(`Enter the movie name`, 'alert-danger', 1000);
    } else {
        getmovies(searchterm);
    }
});

function getmovies(searchterm) {
    let apikey = '&apikey=4d50489e';
    let url = `http://www.omdbapi.com/?s=${searchterm}${apikey}&plot=full`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => MovieCard(data))
        .catch(err =>
            Message(
                `No movie found with the name of ${searchterm}`,
                'alert-danger',
                1000
            )
        );
}

const checkimage = imagesource => {
    if (imagesource.Poster == 'N/A')
        return (imagesource.Poster = 'assets/notfound.png');
};

const MovieCard = data => {
    let output = '';
    let movies = data.Search;
    movies.forEach(movie => {
        checkimage(movie);
        output += Card(movie.Poster, movie.Title, movie.Year, movie.imdbID);
    });
    container.innerHTML = output;
};

const movieSelected = id => {
    sessionStorage.setItem('movieId', id);
    window.location = 'plot.html';
    return false;
};

const Card = (poster, title, year, imdbID) => {
    return `<div class="col-md-3 d-flex align-items-stretch">
    <div class="card mb-2 ml-2">
    <img class="card-img-top" src=${poster}>
    <div class="card-body">
      <h6 class="card-title text-left">${title}</h6>
      <hr>
      <span class="badge badge-secondary">Year:${year}</span> 
      <a onclick= "movieSelected('${imdbID}')" class="btn btn-primary btn-block plot">Plot</a>
    </div>
  </div>
  </div>`;
};

const Message = (message, classname, time) => {
    const div = document.createElement('div');
    div.textContent = `${message}`;
    div.className = `alert ${classname}`;
    const email = document.querySelector('.search-term');
    form.insertBefore(div, email);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, `${time}`);
};
