import React from 'react'
import { QuotesStyled } from './Quotes.styles'

const Quotes = ({ quote, author }) => {
    return (
        <QuotesStyled>
            {quote}
            <small>- {author}</small>
        </QuotesStyled>
    )
}

export default Quotes
