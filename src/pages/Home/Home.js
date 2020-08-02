import React from 'react'
import PageLayout from '../PageLayout'
import Hero from '../../components/Home/Hero/Hero'
import Teaser from '../../components/Home/Teaser/Teaser'
import Quotes from '../../components/Home/Quotes/Quotes'
import Article from '../../components/Home/Article/Article'
import { TeaserList, QuotesContainer, InfoContainer } from './Home.styles'

const Home = () => {
    return (
        <PageLayout>
            <Hero />
            <div className='container'>
                <h2>The best time of the day is comming</h2>

                <TeaserList className='grid-container'>
                    <Teaser />
                </TeaserList>
            </div>

            {/* if isAuth */}
            <QuotesContainer>
                <div className='container'>
                    <Quotes />
                </div>
            </QuotesContainer>

            {/* if isAuth */}
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
                    {/* <div v-if="!articles">
                    <Loader />
                </div> */}
                    <div>
                        <section className='grid-container'>
                            <Article />
                        </section>
                    </div>
                </div>
            </InfoContainer>
        </PageLayout>
    )
}

export default Home