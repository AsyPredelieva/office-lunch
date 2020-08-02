import React from 'react'

const Input = ({ label, type, id, value, onChange }) => {
    return (
        <div className='form-field'>
            <label htmlFor={id}>{label}</label>
            <input type={type || 'text'} id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default Input
