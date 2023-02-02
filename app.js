const API_KEY = "d1cba08de4db4d6f82b10923230202";
const NEW_YORK_ID = "nyc";
const MONTEVIDEO_ID = "montevideo";

const newYorkWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${NEW_YORK_ID}`;
const montevideoWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${MONTEVIDEO_ID}`;

async function getCityWeather(url) {
  const response = await fetch(url);
  const weatherData = await response.json();
  return weatherData;
}

function updateNewYorkWeather() {
  getCityWeather(newYorkWeatherUrl).then((data) => {
    const temperature = data.current.temp_c.toFixed(0);
    const feelsLike = data.current.feelslike_c.toFixed(0);

    document.querySelector(".temp").innerText = `${temperature}°C`;
    document.querySelector(".feels").innerText = `Feels: ${feelsLike}°C`;
  });
}

function updateMontevideoWeather() {
  getCityWeather(montevideoWeatherUrl).then((data) => {
    const temperature = data.current.temp_c.toFixed(0);
    const feelsLike = data.current.feelslike_c.toFixed(0);

    document.querySelector(".temp2").innerText = `${temperature}°C`;
    document.querySelector(".feels2").innerText = `Feels: ${feelsLike}°C`;
  });
}

updateNewYorkWeather();
updateMontevideoWeather();
setInterval(updateNewYorkWeather, 600000);
setInterval(updateMontevideoWeather, 600000);
