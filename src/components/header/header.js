import React from 'react'
import Logo from '../Logo/logo'
import Nav from '../Nav/Nav'
import { HeaderStyled, NavContainer, WelcomeBox } from './Header.styles'

const Header = () => {
    return (
        <HeaderStyled>
            <Logo />
            <NavContainer>
                <WelcomeBox>Welcome, Asy</WelcomeBox>
                {/* <span className='welcome-box'>Welcome, {usernamen}</span> */}
                <Nav></Nav>
            </NavContainer>
        </HeaderStyled>
    )
}

export default Header
