import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

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
