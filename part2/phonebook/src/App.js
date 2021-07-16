import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = event => {
    event.preventDefault()

    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else if (newName && newNumber) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = event => {
    setNameFilter(event.target.value)
  }

  let personsToShow = nameFilter.length
    ? persons.filter(
        p => p.name.toLowerCase().indexOf(nameFilter.trim().toLowerCase()) > -1
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={nameFilter} onChange={handleNameFilterChange} />

      <h2>Add a new</h2>
      <PersonForm name={newName} number={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange} addPerson={addPerson}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>

    </div>
  )
}

export default App
