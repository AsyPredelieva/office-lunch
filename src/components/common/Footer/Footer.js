import React from 'react'
import Nav from '../Nav/Nav'
import { FooterStyled, FooterLogo } from './Footer.styles'

const Footer = () => {
    return (
        <FooterStyled>
            <Nav />
            <FooterLogo />
            <small>© 2013-2020 - Asy LTD - All Rights Reserved.</small>
        </FooterStyled>
    )
}

export default Footer
