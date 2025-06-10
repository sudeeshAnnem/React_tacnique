import React, { useState } from "react";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [previousSearches, setPreviousSearches] = useState([]);
  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    "London": {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const handleSearch = () => {
    const trimmedCity = city.trim();
    if (mockWeatherData[trimmedCity]) {
      setWeather(mockWeatherData[trimmedCity]);
      setError("");
      setPreviousSearches((prev) => [trimmedCity, ...prev]);
    } else {
      setWeather(null);
      setError("City not found.");
    }
  };

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." value={city}
        onChange={(e) => setCity(e.target.value)} />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      <div id="weatherData" style={{ marginTop: "1rem" }}>
        {weather ? (
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
          </>
        ) : (
          error && <div>{error}</div>
        )}
      </div>

      <div id="previousSearches" style={{ marginTop: "1rem" }}>
        <h4>Previous Searches:</h4>
        <ul>
          {previousSearches.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
