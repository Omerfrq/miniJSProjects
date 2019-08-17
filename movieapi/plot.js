function getmovieid() {
    let moviedetails = document.querySelector('#movie-details');
    let movieid = sessionStorage.getItem('movieId');
    let apikey = '&apikey=4d50489e';
    let url3 = `http://www.omdbapi.com/?i=${movieid}${apikey}&plot=full`;
    console.log(url3);
    fetch(url3)
        .then(res => res.json())
        .then(data => {
            moviearray = data;
            var output3 = '';
            output3 += `
      <div class="container mt-4 bg-light p-3">      
      <div class="row">    
      <div class="col-md-4">
      <img class="img-thumbnail" src=${moviearray.Poster} alt="Card image cap">
      </div>
      <div class ="col-md-8">
        <h5 class="display-4">${moviearray.Title} <span>( ${
                moviearray.Year
            } )</span></h5>
        <h5 class="display-5">${moviearray.Genre} <span>( ${
                moviearray.Runtime
            } )</span></h5>
        <h6 class=display-5>Imdb Rating: ${moviearray.imdbRating}.</h6>
        <h6 class=display-5>Starring: ${moviearray.Actors}.</h6>
        <h6 class="display-5">Plot: </h6>
        <p class="lead">${moviearray.Plot}</h6>
        <a href="https://www.imdb.com/title/${
            moviearray.imdbID
        }/" target="_blank" class="btn btn-dark btn-block mt-4" >Visit on IMDB</a>  
    </div>
    </div>
    </div>
    `;
            moviedetails.innerHTML = output3;
        });
}
