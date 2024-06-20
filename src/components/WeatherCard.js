import React from "react";
import countries from "countries-and-timezones";

const WeatherCard = ({ data }) => {
  // Function to get full country name from country code
  const getCountryName = (countryCode) => {
    try {
      const country = countries.findByIso2(countryCode);
      return country ? country.name : countryCode;
    } catch (error) {
      console.error("Error finding country:", error);
      return countryCode;
    }
  };

  return (
    <div className="weather-card">
      <h2>
        {data.name}, {getCountryName(data.sys.country)}
      </h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
