import React from 'react'

const Person = ({ person, onDelete }) => (
  <li>
    {person.name} {person.number} <button onClick={onDelete(person)}>delete</button>
  </li>
)

export default Person
