import React from 'react'
import { Link } from 'react-router-dom'
import { HeroStyled, Intro } from './Hero.styles'

const Hero = () => {
    return (
        <HeroStyled className='hero'>
            <div className='container'>
                <Intro>
                    <h1>Are you feeling hungry?</h1>
                    <p>
                        I know you are fully prepared to make the most important choice of the day.
                    </p>
                    <Link to='/offers' className='cta-btn'>
                        Get Offers
                    </Link>
                </Intro>
            </div>
        </HeroStyled>
    )
}

export default Hero
