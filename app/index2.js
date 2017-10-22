const key = "f74df980fa4dfddbdd9152467484cea7";

let getWeather = function(city) {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`; 

	fetch(url, { method: "GET" })
		.then(response => response.json())
		.then(setData);

	function setData(json) {
		let temp = Math.round(((json.main.temp - 273.15) * 100) / 100).toFixed(1);
		// let temp = json.main.temp - 273.15;
		let temperature = document.querySelector("#temp");
		temperature.innerHTML = temp;

		let desc = json.weather[0].description;
		let description = document.querySelector("#desc");
		description.innerHTML = desc;

		let latt = json.coord.lat;
		let latitude = document.querySelector('#latitude');
		latitude.innerHTML += latt;

		let long = json.coord.lon;
		let longitude = document.querySelector("#longitude");
		longitude.innerHTML += long;
	}
}

let button = document.querySelector("#form");
button.addEventListener("submit", function(e) {
	let city = document.querySelector("#city").value;
	document.querySelector("#city-name").innerHTML = city;
	// console.log(city);
	getWeather(city);

	e.preventDefault();
	return false;
});

