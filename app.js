function getWeatherData() {
	const apiKey = "1f37ca8126300c1de3c08e964e37f71a";
	const city = document.getElementById("city").value;
	const weather = document.getElementById("weather");

	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
	)
		.then((response) => response.json())
		.then((data) => {
			const temp = Math.round(data.main.temp);
			const description = data.weather[0].description;
			const humidity = data.main.humidity;
			const windspeed = data.main.windspeed;

			weather.innerHTML = `
            <p>Temperature: ${temp}°C </p>
            <p> Description: ${description} </p>
            <p>Humidity: ${humidity}</p>
            <p>Wind Speed:${windspeed} m/s</p>`;
		})
		.catch((error) => console.log(error));
}
