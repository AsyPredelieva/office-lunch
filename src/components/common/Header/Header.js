import React, { useContext } from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import { HeaderStyled, NavContainer, WelcomeBox } from './Header.styles'
import UserContext from '../../../Context'

const Header = () => {
    const context = useContext(UserContext)

    return (
        <HeaderStyled>
            <Logo />
            <NavContainer>
                {context.user && context.user.isAuth && (
                    <WelcomeBox>Welcome, {context.user.username}</WelcomeBox>
                )}
                <Nav />
            </NavContainer>
        </HeaderStyled>
    )
}

export default Header
