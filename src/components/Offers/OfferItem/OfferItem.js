import React from 'react'
import { Link } from 'react-router-dom'
import { Li, ImgContainer } from './OfferItem.styles'

const OfferItem = ({ name, imgBckgr }) => {
    return (
        <Li className='grid-small'>
            <h3>{name}</h3>
            <ImgContainer>
                <img src={imgBckgr} alt={name} />
            </ImgContainer>
            <Link to={`/offers/${name}`} className='cta-btn'>
                Get Menu
            </Link>
        </Li>
    )
}

export default OfferItem
