import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons)
    })
  }, [])

  const addPerson = event => {
    event.preventDefault()

    const foundPerson = persons.find(p => p.name === newName)
    if (foundPerson) {
      const changedPerson = { ...foundPerson, name: newName, number: newNumber }
      const id = foundPerson.id
      personService.update(id, changedPerson).then(returnedPerson => {
        setNotificationMessage(
          `Number changed for '${returnedPerson.name}'`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        setPersons(persons.map(person => (person.id !== id ? person : returnedPerson)))
        setNewName('')
        setNewNumber('')
      }).catch(error => {
        setNotificationMessage(
          `Information of '${changedPerson.name}' has already been removed from server`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
        setNewName('')
        setNewNumber('')
      })
    } else if (newName && newNumber) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService.create(personObject).then(returnedPerson => {
        setNotificationMessage(
          `Added '${returnedPerson.name}'`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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

  const handleDelete = person => () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(person.id)
      .then(() => setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  let personsToShow = nameFilter.length
    ? persons.filter(
        p => p.name.toLowerCase().indexOf(nameFilter.trim().toLowerCase()) > -1
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter name={nameFilter} onChange={handleNameFilterChange} />

      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </div>
  )
}

export default App
