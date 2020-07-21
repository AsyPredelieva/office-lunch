import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const PageLayout = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default PageLayout
