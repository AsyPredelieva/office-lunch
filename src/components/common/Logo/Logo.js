import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const LogoContainer = styled.div`
    width: 110px;
    margin: 5px 20px;
    flex-shrink: 0;

    @media screen and (max-width: 640px) {
        width: 70px;
    }
`

const Logo = () => {
    return (
        <LogoContainer>
            <img src={logo} className='logo' alt='Lunch for break' />
        </LogoContainer>
    )
}

export default Logo
