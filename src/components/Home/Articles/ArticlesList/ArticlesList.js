import React, { useState, useEffect } from 'react'
import Article from '../ArticleItem/ArticleItem'

const ArticlesList = () => {
    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        const response = await fetch('http://localhost:9999/api/articles')
        const data = await response.json()
        const sortedArticles = data.sort(() => 0.5 - Math.random()).slice(0, 2)

        setArticles(sortedArticles)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <section className='grid-container'>
            {articles ? (
                articles.map((article) => (
                    <Article
                        key={article.id}
                        title={article.title}
                        description={article.description}
                    />
                ))
            ) : (
                <div>Loading...</div>
            )}
        </section>
    )
}

export default ArticlesList
