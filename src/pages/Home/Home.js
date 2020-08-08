import React, { useContext } from 'react'
// import ReactDOM from 'react-dom'
import PageLayout from '../PageLayout'
import Hero from '../../components/Home/Hero/Hero'
import Teaser from '../../components/Home/Teaser/Teaser'
import Quotes from '../../components/Home/Quotes/QuotesList/QuotesList'
import Articles from '../../components/Home/Articles/ArticlesList/ArticlesList'
import UserContext from '../../Context'
import { QuotesContainer, InfoContainer } from './Home.styles'
// import { ParallaxProvider } from 'react-scroll-parallax'
// import { Parallax } from 'react-scroll-parallax'
// import tomato from '../../assets/domat_1.png'

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
                    {/* <ParallaxProvider> */}
                    <InfoContainer>
                        {/* <Parallax
                                offsetYMin={-50}
                                offsetYMax={50}
                                className='parallax-item tomato-left'>
                                <img src={tomato} />
                            </Parallax> */}
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
                            <Articles />
                        </div>
                    </InfoContainer>
                    {/* </ParallaxProvider> */}
                </>
            )}
        </PageLayout>
    )
}

export default Home
