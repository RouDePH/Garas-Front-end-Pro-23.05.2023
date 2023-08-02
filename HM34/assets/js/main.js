const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '5d066958a60d315387d9492393935c19';
const city = 'Odessa';

const weatherContainerTitle = document.getElementById('weather-container-title');
weatherContainerTitle.innerText = `Погода в городе ${city}`;

document.addEventListener('DOMContentLoaded', getWeather());

function getWeather() {
  const url = `${apiEndpoint}?q=${city}&units=metric&APPID=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tempElement = document.getElementById('temp');
      const pressureElement = document.getElementById('pressure');
      const descriptionElement = document.getElementById('description');
      const humidityElement = document.getElementById('humidity');
      const speedElement = document.getElementById('speed');
      const degElement = document.getElementById('deg');
      const iconElement = document.getElementById('icon');

      tempElement.textContent = data.main.temp;
      pressureElement.textContent = data.main.pressure;
      descriptionElement.textContent = data.weather[0].description;
      humidityElement.textContent = data.main.humidity;
      speedElement.textContent = data.wind.speed;
      degElement.textContent = data.wind.deg;

      const iconCode = data.weather[0].icon;
      iconElement.setAttribute('src', `https://openweathermap.org/img/w/${iconCode}.png`);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

