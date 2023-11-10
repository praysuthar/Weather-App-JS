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
			const time = new Date(data.dt * 1_000);
			const description = data.weather[0].description;
			const humidity = data.main.humidity;
			const windspeed = data.wind.speed;
			weather.innerHTML = `
			<h1> ${temp}°C </h1>
			<p> Description: ${description} </p>
			<p> ${city}</p>
			<p> ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} </p>
            <p>Humidity: ${humidity}</p>
            <p>Wind Speed:${windspeed} m/s</p>`;
		})
		.catch((error) => console.log(error));
}
