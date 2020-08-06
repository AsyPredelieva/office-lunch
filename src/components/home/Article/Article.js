import React from 'react'
import { ArticleStyled } from './Article.styles'

const Article = ({ title, description }) => {
    return (
        <ArticleStyled className='grid-half'>
            <h3>{title}</h3>
            {description.length === 1 ? (
                <p>{description}</p>
            ) : (
                <ul className='bullet'>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </ArticleStyled>
    )
}

export default Article
