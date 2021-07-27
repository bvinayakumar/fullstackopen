import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, onShow }) => {
  if (countries.length > 0) {
    if (countries.length === 1) {
      return (
        <div>
          <CountryDetails country={countries[0]} />
        </div>
      )
    } else if (countries.length <= 10) {
      return (
        <div>
          {countries.map(country => (
            <Country key={country.name} country={country} onShow={onShow} />
          ))}
        </div>
      )
    } else {
      return <div>Too many matches, specify another filter</div>
    }
  }
  return <div></div>
}

export default Countries
