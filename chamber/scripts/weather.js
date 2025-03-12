document.addEventListener('DOMContentLoaded', () => {
    const currentWeatherElement = document.getElementById('current-weather');
    const weatherForecastElement = document.getElementById('weather-forecast');

    const currentWeather = {
        temperature: '75°F',
        condition: 'Partly Cloudy',
        high: '85°F',
        low: '52°F',
        humidity: '34%',
        sunrise: '7:30am',
        sunset: '9:59pm',
        imageUrl: 'images/cloud.png'
    };

    const weatherForecast = [
        { day: 'Today', temperature: '90°F' },
        { day: 'Wednesday', temperature: '89°F' },
        { day: 'Thursday', temperature: '68°F' }
    ];

    currentWeatherElement.innerHTML = `
        <div style="display: flex; align-items: flex-start;">
            <img src="${currentWeather.imageUrl}" alt="${currentWeather.condition}" style="width: 50px; height: 50px; margin-right: 40px; margin-left: 20px;">
            <div>
                <p>${currentWeather.temperature}</p>
                <p>${currentWeather.condition}</p>
                <p>High: ${currentWeather.high}</p>
                <p>Low: ${currentWeather.low}</p>
                <p>Humidity: ${currentWeather.humidity}</p>
                <p>Sunrise: ${currentWeather.sunrise}</p>
                <p>Sunset: ${currentWeather.sunset}</p>
            </div>
        </div>
    `;

    weatherForecast.forEach(forecast => {
        const forecastElement = document.createElement('p');
        forecastElement.textContent = `${forecast.day}: ${forecast.temperature}`;
        weatherForecastElement.appendChild(forecastElement);
    });
});
