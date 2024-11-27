import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom styles
import Weather from "./components/weathergit "; // Correct import path for Weather component

const API_KEY = '74ab65fda57a01632018ee36b957735a';

async function getWeather(cityName, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getWeather(city, API_KEY);
    if (result) {
      setWeather(result);
      setError(null);
    } else {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="/cloudy.png" alt="Weather App Logo" style={{ height: "30px", marginRight: "10px" }} />
            Weather App
          </a>
        </nav>

        <h1 className="my-4 text-center">Weather for {weather ? weather.name : 'Your City'}</h1>

        <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="btn btn-primary ms-2">Search</button>
        </form>

        {error && <div className="alert alert-danger">{error}</div>}

        {weather && <Weather weather={weather} />}
      </div>
    </div>
  );
}

export default App;
