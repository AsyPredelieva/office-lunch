import React, { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PageLayout from '../PageLayout'
import Hero from '../../components/Home/Hero/Hero'
import Teaser from '../../components/Home/Teaser/Teaser'
import Quotes from '../../components/Home/Quotes/Quotes'
import Article from '../../components/Home/Article/Article'
import UserContext from '../../Context'
import { TeaserList, QuotesContainer, InfoContainer } from './Home.styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
    const [articles, setArticles] = useState([])
    const [quotes, setQuotes] = useState([])
    const context = useContext(UserContext)

    const getArticles = async () => {
        const response = await fetch('http://localhost:9999/api/articles')
        const data = await response.json()

        setArticles(data)
    }

    const getQuotes = async () => {
        const response = await fetch('http://localhost:9999/api/quotes')
        const data = await response.json()

        setQuotes(data)
    }

    useEffect(() => {
        getArticles()
        getQuotes()
    }, [])

    return (
        <PageLayout>
            <Hero />
            <div className='container'>
                <h2>The best time of the day is comming</h2>
                <TeaserList className='grid-container'>
                    <Teaser />
                </TeaserList>
            </div>
            {context.user && context.user.isAuth && (
                <>
                    <QuotesContainer>
                        <div className='container'>
                            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                                {quotes ? (
                                    quotes.map((quote) => (
                                        <Quotes
                                            key={quote.id}
                                            quote={quote.quote}
                                            author={quote.author}
                                        />
                                    ))
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </Carousel>
                        </div>
                    </QuotesContainer>
                    <InfoContainer>
                        {/* <img
                                v-parallax="0.2"
                                className="parallax-item tomato-left"
                                src="../assets/domat_1.png"
                                alt="tomato"
                            />
                            <img
                                v-parallax="0.3"
                                className="parallax-item tomato-right"
                                src="../assets/domat_2.png"
                                alt="tomato"
                            />
                            <img
                                v-parallax="0.4"
                                className="parallax-item olive"
                                src="../assets/olive_1.png"
                                alt="olive"
                            />
                            <img
                                v-parallax="0.2"
                                className="parallax-item chuska-left"
                                src="../assets/chuska_1.png"
                                alt="peper"
                            />
                            <img
                                v-parallax="0.5"
                                className="parallax-item chuska-right"
                                src="../assets/chuska_2.png"
                                alt="peper"
                            /> */}
                        <div className='container'>
                            <h2>Healthy Eating</h2>
                            <div>
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
                            </div>
                        </div>
                    </InfoContainer>
                </>
            )}
        </PageLayout>
    )
}

export default Home
