import React, { useState, useEffect } from 'react'
import QuoteItem from '../QuoteItem/QuoteItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './QuotesList.styles.scss'

const QuotesList = () => {
    const [quotes, setQuotes] = useState([])

    const getQuotes = async () => {
        const response = await fetch('http://localhost:9999/api/quotes')
        const data = await response.json()

        setQuotes(data)
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <div className='container'>
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                {quotes ? (
                    quotes.map((quote) => (
                        <QuoteItem key={quote.id} quote={quote.quote} author={quote.author} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </Carousel>
        </div>
    )
}

export default QuotesList
