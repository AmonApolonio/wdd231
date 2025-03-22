document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '424a11c4224e4233971170724252203';
    const location = '40.251737,-111.649283';
    const currentWeatherElement = document.getElementById('current-weather');
    const weatherForecastElement = document.getElementById('weather-forecast');

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`);
        const data = await response.json();

        const currentTemp = data.current.temp_f;
        const condition = data.current.condition.text;
        const iconUrl = "https:" + data.current.condition.icon;

        currentWeatherElement.innerHTML = `
            <div style="display: flex; align-items: flex-start;">
                <img src="${iconUrl}" alt="${condition}" style="width: 50px; height: 50px; margin-right: 40px; margin-left: 20px;">
                <div>
                    <p>${currentTemp}°F</p>
                    <p>${condition}</p>
                </div>
            </div>
        `;

        data.forecast.forecastday.forEach(forecast => {
            const forecastDate = new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            const avgTemp = Math.round(forecast.day.avgtemp_f);
            const forecastElement = document.createElement('p');
            forecastElement.textContent = `${forecastDate}: ${avgTemp}°F`;
            weatherForecastElement.appendChild(forecastElement);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        currentWeatherElement.innerHTML = `<p>Failed to load weather data.</p>`;
    }
});