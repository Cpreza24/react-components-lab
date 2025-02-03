import React from 'react';
import './WeatherForecast'

function WeatherForecast({ weatherForecasts }) {
  return (
  <>
    {
      weatherForecasts.map((weatherForecast) => (
        <div className="weather">
          <h2>{weatherForecast.day}</h2>
          <img src={weatherForecast.img} alt="" />
          <p><span>conditions: {weatherForecast.conditions} </span>current weather conditions</p>
          <p><span>time: {weatherForecast.time} </span>time of day</p>
        </div>
      ))
    }
    </>
  )
}

export default WeatherForecast
