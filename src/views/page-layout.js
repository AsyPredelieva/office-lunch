import React from 'react'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'

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
