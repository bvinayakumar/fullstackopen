import React from 'react'

const Country = ({ country, onShow }) => {
  return (
    <div>
      {country.name} <button onClick={onShow(country.name)}>show</button>
    </div>
  )
}

export default Country
