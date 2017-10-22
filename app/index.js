const key = "f74df980fa4dfddbdd9152467484cea7";

function getData(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
    fetch(url)
        .then(response => response.json())
        .then(setData);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setCurrentPosition);
    console.log(navigator.geolocation)
} else {
    alert("geolocation is not supported");
}

function setCurrentPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}`

    fetch(url)
        .then(resp => resp.json())
        .then(setData)
}

function setData(json) {
    let city = document.querySelector("#city-name").innerHTML = json.name;

    let temperature = document.querySelector("#temp").innerHTML = Math.round(((json.main.temp - 273.15) * 100) / 100).toFixed(1);
    
    let description = document.querySelector("#desc").innerHTML = json.weather[0].description;

    let latitude = document.querySelector("#latitude").innerHTML = json.coord.lat;

    let longitude = document.querySelector("#longitude").innerHTML = json.coord.lon;
}

let form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    let city = document.querySelector("#city").value;
    getData(city);

    e.preventDefault();
    return false;
})