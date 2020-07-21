import React from 'react'
import Logo from '../logo'
import Nav from '../nav/nav'
import { HeaderStyled, NavContainer, WelcomeBox } from './header.styles'

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
