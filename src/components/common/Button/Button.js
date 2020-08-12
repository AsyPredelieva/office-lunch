import React from 'react'

const Button = ({ type, title, disabled }) => {
    return (
        <button className='cta-btn' type={type || ''} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button
