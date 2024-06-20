import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Story from "./Story";
import SearchBox from "./SearchBox";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch weather data for the default location when the component mounts
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  const fetchWeatherData = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a9f037407fc3831881bdbac46b46b23a`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Location not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError("");
      })
      .catch((error) => {
        setWeatherData(null);
        setError(error.message);
      });
  };

  const handleSearch = (query) => {
    setLocation(query);
  };

  return (
    <div className="weather-dashboard">
      <SearchBox onSearch={handleSearch} />
      {error && <div className="error-message">{error}</div>}
      {weatherData && <WeatherCard data={weatherData} />}
      {!weatherData && !error && (
        <p>Please enter a city to search for weather</p>
      )}
      <Story />
    </div>
  );
};

export default WeatherDashboard;
