document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching the weather data:', error));

    // print data from api
   function printData(apiUrl) {
       fetch(apiUrl)
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Error fetching the weather data:', error));
   };

   printData(apiUrl);
}

function displayWeather(data) {
    if (data.cod === 200) {
        const weatherDiv = document.getElementById('weatherResult');
        weatherDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        alert('City not found. Please try again.');
    }
}
