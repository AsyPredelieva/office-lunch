import React from 'react'

const Button = ({ type, title }) => {
    return (
        <button className='cta-btn' type={type || ''}>
            {title}
        </button>
    )
}

export default Button
