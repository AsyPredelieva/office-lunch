import React from 'react'
import Nav from '../nav/nav'
import { FooterStyled, FooterLogo } from './footer.styles'

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
