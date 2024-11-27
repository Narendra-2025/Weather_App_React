import React from "react";

// Weather component to display the weather details passed as props
function Weather({ weather }) {
  const { main, wind } = weather || {};
  const { temp, temp_max, temp_min, feels_like, humidity, pressure } = main || {};
  const { speed } = wind || {};

  // Check if main data exists
  if (!main) {
    return <div>Weather data is unavailable.</div>;
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Temperature</div>
          <div className="card-body">
            <h3>{temp ? temp : "N/A"} °C</h3>
            <p>Max: {temp_max ? temp_max : "N/A"} °C</p>
            <p>Min: {temp_min ? temp_min : "N/A"} °C</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Feels Like</div>
          <div className="card-body">
            <h3>{feels_like ? feels_like : "N/A"} °C</h3>
            <p>Humidity: {humidity ? humidity : "N/A"}%</p>
            <p>Wind: {speed ? speed : "N/A"} km/h</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Pressure</div>
          <div className="card-body">
            <h3>{pressure ? pressure : "N/A"} hPa</h3>
            <p>Sea Level: {main?.sea_level ? main.sea_level : "N/A"} hPa</p>
            <p>Ground Level: {main?.grnd_level ? main.grnd_level : "N/A"} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather; // Ensure this export exists
