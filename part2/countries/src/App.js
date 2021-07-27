import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFinder from './components/CountryFinder'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleCountryFilterChange = event => {
    setCountryFilter(event.target.value)
  }

  const onShow = countryName => () => setCountryFilter(countryName)

  const countriesToShow = countryFilter.length
    ? countries.filter(
        c =>
          c.name.toLowerCase().indexOf(countryFilter.trim().toLowerCase()) > -1
      )
    : []

  return (
    <div>
      <CountryFinder
        name={countryFilter}
        onChange={handleCountryFilterChange}
      />
      <Countries countries={countriesToShow} onShow={onShow} />
    </div>
  )
}

export default App
