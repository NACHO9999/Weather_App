const API_KEY = "d1cba08de4db4d6f82b10923230202";
const CITIES = [
  { name: "New York", id: "nyc" },
  { name: "Montevideo", id: "montevideo" }
];

CITIES.forEach(city => {
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.id}`;
  
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temp_c;
      const feels = data.current.feelslike_c;
      const weatherInfo = `${temperature}°C, ${feels}°C`;

      const weatherDiv = document.querySelector(`#weather-info-${city.id}`);
      weatherDiv.querySelector(".weather-info").textContent = weatherInfo;
    })
    .catch(error => console.error(error));
});
