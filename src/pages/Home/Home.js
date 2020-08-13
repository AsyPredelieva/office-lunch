import React, { useContext } from 'react'
// import ReactDOM from 'react-dom'
import PageLayout from '../PageLayout'
import Hero from '../../components/Home/Hero/Hero'
import Teaser from '../../components/Home/Teaser/Teaser'
import Quotes from '../../components/Home/Quotes/QuotesList/QuotesList'
import Articles from '../../components/Home/Articles/ArticlesList/ArticlesList'
import UserContext from '../../Context'
import { QuotesContainer, InfoContainer } from './Home.styles'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from 'react-scroll-parallax'
import tomato from '../../assets/domat_1.png'
import tomatoRight from '../../assets/domat_2.png'
import olive from '../../assets/olive_1.png'
import peper from '../../assets/chuska_1.png'
import peperRight from '../../assets/chuska_2.png'

const Home = () => {
    const context = useContext(UserContext)

    return (
        <PageLayout>
            <Hero />
            <div className='container'>
                <h2>The best time of the day is comming</h2>
                <Teaser />
            </div>
            {context.user && context.user.isAuth && (
                <>
                    <QuotesContainer>
                        <Quotes />
                    </QuotesContainer>
                    <ParallaxProvider>
                        <InfoContainer>
                            <ParallaxBanner
                                className='parallax-item'
                                layers={[
                                    {
                                        image: tomato,
                                        amount: 0.1,
                                    },
                                    {
                                        image: tomatoRight,
                                        amount: 0.5,
                                    },
                                    {
                                        image: olive,
                                        amount: 0.3,
                                    },
                                    {
                                        image: peper,
                                        amount: 0.4,
                                    },
                                    {
                                        image: peperRight,
                                        amount: 0.7,
                                    },
                                ]}></ParallaxBanner>
                            <div className='container'>
                                <h2>Healthy Eating</h2>
                                <Articles />
                            </div>
                        </InfoContainer>
                    </ParallaxProvider>
                </>
            )}
        </PageLayout>
    )
}

export default Home
