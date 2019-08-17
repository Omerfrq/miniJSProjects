const endpoints = "http://api.openweathermap.org/data/2.5/weather?q=";
const apikey ="&appid=04ffb599d86cbb9353cde24d94ca1e79";
const unit = "&units=metric";
// var img = document.getElementById("image");
// img.style.visibility = "hidden";
// var img2 = document.getElementById("image2");
// img2.style.visibility = "hidden";



function myFunction() {
    const country = document.getElementById("city").value;
    const api_url2 = endpoints + country + apikey + unit;
    fetch(api_url2)
        .then((resp) => resp.json())
        .then( data => {
            const temp = data.main.temp;
            const city = data.sys.country;
            const comment = data.weather[0].description;
            const degree = "&#8451";
            console.log(city);
        document.querySelector('p').innerHTML = "Temperature in " + country + ","+ city + " is " + temp + degree + " with " + comment + ".";   

        })
        .catch(function(error) {
            console.log(error);
        });   
    
      
        function activeautocomplete()
        {
         var input = document.getElementById("city");
         var autocomplete = new google.maps.places.Autocomplete(input);
        }
}








