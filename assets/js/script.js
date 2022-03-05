const apiKey = "56cd55bcb41fb1d5dd1158c24bb37cc0";
const pastSearch = [];


$("#search-container").on("submit", citySearch);


function citySearch(event) {
    event.preventDefault();

    const city = $("#inputCity").val().trim()
    $("#inputCity").val("");
    console.log(city)
    
    pastSearch.push(city);

    localStorage.setItem("Cities", city)
    
}



const getCity = city => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=city&appid=${apiKey}`, {
        method: "GET",
    })

    .then((response) => response.json())
    .then((data) => {
        displayCityDAta(data);
        console.log(data)
    }) 
    .catch((error) => {});



}

getCity()

