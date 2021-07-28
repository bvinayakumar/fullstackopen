import React from 'react'
import Person from './Person'

const Persons = ({ persons, onDelete }) => (
  <ul>
    {persons.map(person => (
      <Person key={person.name} person={person} onDelete={onDelete} />
    ))}
  </ul>
)

export default Persons
