import React from 'react'
import { Ul, Li } from './Teaser.styles'

const Teaser = () => {
    return (
        <Ul className='grid-container'>
            <Li className='quick grid-aside'>
                <strong>Quickly and easily</strong>
                find out the actual menus.
            </Li>
            <Li className='easy grid-aside'>
                <strong>Simply and calmly</strong>
                make your choice.
            </Li>
            <Li className='gently grid-aside'>
                <strong>Gently and precisely</strong>
                order your favourite meal.
            </Li>
        </Ul>
    )
}

export default Teaser
