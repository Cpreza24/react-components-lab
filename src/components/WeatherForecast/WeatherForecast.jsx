import React from 'react';
import './WeatherForecast.css'

function WeatherForecast({ weatherForecasts }) {
  return (
  <>
    {
      weatherForecasts.map((weatherForecast) => (
        <div className="weather">
          <h2>{weatherForecast.day}</h2>
          <img src={weatherForecast.img} alt='image of weather conditions' />
          <p><span>conditions: {weatherForecast.conditions} </span></p>
          <p><span>time: {weatherForecast.time} </span></p>
        </div>
      ))
    }
    </>
  )
}

export default WeatherForecast
