import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../Context'
import { Li, ImgContainer } from './OfferItem.styles'

const OfferItem = ({ name, imgBckgr }) => {
    const context = useContext(UserContext)

    return (
        <Li className='grid-small'>
            <h3>{name}</h3>
            <ImgContainer>
                <img src={imgBckgr} alt={name} />
            </ImgContainer>
            {context.user && context.user.isAuth && (
                <Link to={`/offers/${name}`} className='cta-btn'>
                    Get Menu
                </Link>
            )}
        </Li>
    )
}

export default OfferItem
