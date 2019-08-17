let form = document.querySelector("form");
let container = document.querySelector('.img-container');
let carousel = document.querySelector('.carousel-inner');
console.log(carousel);

form.addEventListener("submit", e => {
  e.preventDefault();
  let formdata = new FormData(form);
  let searchterm = formdata.get("searchterm");
  getPhotos(searchterm);
});

function getPhotos(searchterm) {
        let query = `&query=${searchterm}`;
        let accesstoken ="&access_token=4439eff67b986d81da6ccb14a13e2355d541df14df788ecd7a0757500722bd6f";
        let endpoint = `https://api.unsplash.com/search/photos?page=1${query}${accesstoken}`;
        console.log(endpoint);
        fetch(endpoint)
        .then(res => res.json())
        .then(photo);

}

function photo(photos){
    let unphotos =photos.results;
    let output = "";
        for (let i = 0; i <unphotos.length; i++) {
            
            if([i] == 0 ) {     
                console.log(unphotos[i]);   
            output += `<div class="carousel-item active">
            <img class="d-block w-100" src=${unphotos[i].urls.regular}>
            <div class="carousel-caption d-none d-md-block">
                <h5>${unphotos[i].description}</h5>
            </div>
            </div>
            `;
            }
            else{
                output += `<div class="carousel-item">
            <img class="d-block w-100" src=${unphotos[i].urls.regular}>
            <div class="carousel-caption d-none d-sm-block">
                <h5>${unphotos[i].description}</h5>
            </div>
            </div>
            `;
            }
        }
        carousel.innerHTML = output;

}