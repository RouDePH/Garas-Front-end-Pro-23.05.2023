const apiEndpoint="https://api.openweathermap.org/data/2.5/weather",apiKey="5d066958a60d315387d9492393935c19",city="Odessa",weatherContainerTitle=document.getElementById("weather-container-title");function getWeather(){fetch(`${apiEndpoint}?q=${city}&units=metric&APPID=${apiKey}`).then((e=>e.json())).then((e=>{const t=document.getElementById("temp"),n=document.getElementById("pressure"),d=document.getElementById("description"),i=document.getElementById("humidity"),o=document.getElementById("speed"),a=document.getElementById("deg"),r=document.getElementById("icon");t.textContent=e.main.temp,n.textContent=e.main.pressure,d.textContent=e.weather[0].description,i.textContent=e.main.humidity,o.textContent=e.wind.speed,a.textContent=e.wind.deg;const c=e.weather[0].icon;r.setAttribute("src",`https://openweathermap.org/img/w/${c}.png`)})).catch((e=>{console.error("Error fetching weather data:",e)}))}weatherContainerTitle.innerText=`Погода в городе ${city}`,document.addEventListener("DOMContentLoaded",getWeather());