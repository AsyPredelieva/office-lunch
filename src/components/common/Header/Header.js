import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import { HeaderStyled, NavContainer, WelcomeBox } from './Header.styles'
import UserContext from '../../../Context'

class Header extends Component {
    static contextType = UserContext

    render() {
        const { user } = this.context

        return (
            <HeaderStyled>
                <Logo />
                <NavContainer>
                    {user && user.isAuth && <WelcomeBox>Welcome, {user.username}</WelcomeBox>}
                    <Nav />
                </NavContainer>
            </HeaderStyled>
        )
    }
}

export default Header
