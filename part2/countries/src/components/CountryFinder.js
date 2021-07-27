import React from 'react'

const CountryFinder = ({ name, onChange }) => (
  <div>
    find countries: <input value={name} onChange={onChange} />
  </div>
)

export default CountryFinder
