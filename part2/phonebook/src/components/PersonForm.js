import React from 'react'

const PersonForm = ({ name, number, onNameChange, onNumberChange, addPerson }) => (
    <form onSubmit={addPerson}>
    <div>
      name: <input value={name} onChange={onNameChange} />
      <div>
        number: <input value={number} onChange={onNumberChange} />
      </div>
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>

)

export default PersonForm