import React from 'react'
import Languages from './Languages'
import WeatherDetails from './WeatherDetails'

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <Languages languages={country.languages}/>
      <img src = {country.flag} width="100" height="100" alt='Country Flag'/>
      <WeatherDetails city={country.capital} />
    </div>
  )
}

export default CountryDetails
