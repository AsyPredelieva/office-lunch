import React from 'react'
import { Li } from './Teaser.styles'

const Teaser = () => {
    return (
        <>
            <Li className='quick grid-aside'>
                <strong>Quick</strong>
                Teaser description
            </Li>
            <Li className='easy grid-aside'>
                <strong>Easy</strong>
                Teaser description
            </Li>
            <Li className='gently grid-aside'>
                <strong>Fast</strong>
                Teaser description
            </Li>
        </>
    )
}

export default Teaser
