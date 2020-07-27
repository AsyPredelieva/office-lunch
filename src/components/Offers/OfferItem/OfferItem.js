import React from 'react'
import { Link } from 'react-router-dom'
import { Li, ImgContainer } from './OfferItem.styles'
import imgBckgr from '../../../assets/orders-bckgr_1.png'

const OfferItem = () => {
    return (
        <>
            <Li className='grid-small'>
                <h3>Каменица</h3>
                <ImgContainer>
                    <img src={imgBckgr} alt='Kamenica' />
                </ImgContainer>
                <Link to={`/offers/Kamenica`} className='cta-btn'>
                    Get Menu
                </Link>
            </Li>
            <Li className='grid-small'>
                <h3>Ривиера</h3>
                <ImgContainer>
                    <img src={imgBckgr} alt='Riviera' />
                </ImgContainer>
                <Link to={`/offers/Riviera`} className='cta-btn'>
                    Get Menu
                </Link>
            </Li>
            <Li className='grid-small'>
                <h3>Южен полъх</h3>
                <ImgContainer>
                    <img src={imgBckgr} alt='SouthWind' />
                </ImgContainer>
                <Link to={`/offers/SouthWind`} className='cta-btn'>
                    Get Menu
                </Link>
            </Li>
        </>
    )
}

export default OfferItem
