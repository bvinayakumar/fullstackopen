import React from 'react'

const Filter = ({ name, onChange }) => (
    <div>
        filter shown with:
        <input value={name} onChange={onChange} />
    </div>
)

export default Filter
