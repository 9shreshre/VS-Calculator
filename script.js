async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY_HERE";  // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    const weather = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <p>Temperature: ${data.main.temp}°C</p>
      <p>${data.weather[0].description}</p>
    `;
    document.getElementById("weatherResult").innerHTML = weather;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
