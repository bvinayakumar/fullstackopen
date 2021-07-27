import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherDetails = ({ city }) => {
  const [weather, setWeather] = useState('')
  const apiKey = process.env.REACT_APP_API_KEY
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`

  useEffect(() => {
    axios.get(url).then(response => {
      setWeather(response.data)
    })
  }, [url])

  if (weather === '') {
    return <div></div>
  } else {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <div>
          <b>temperature: </b>{weather.current.temperature} Celcius
        </div>
        <img
          src={weather.current.weather_icons[0]}
          width='50'
          height='50'
          alt='Weather Icon'
        />
        <div>
          <b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.dir}
        </div>
      </div>
    )
  }
}

export default WeatherDetails
