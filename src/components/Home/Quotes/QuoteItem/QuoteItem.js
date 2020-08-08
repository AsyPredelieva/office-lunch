import React from 'react'
import { QuoteStyled } from './QuoteItem.styles'

const Quotes = ({ quote, author }) => {
    return (
        <QuoteStyled>
            {quote}
            <small>- {author}</small>
        </QuoteStyled>
    )
}

export default Quotes
