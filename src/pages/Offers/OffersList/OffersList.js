import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../../PageLayout'
import OfferItem from '../../../components/Offers/OfferItem/OfferItem'
import { OffersContainer, OffersList } from './OffersList.styles'

const Offers = () => {
    const [offers, setOffers] = useState([])
    const history = useHistory()

    const getOffers = async () => {
        const response = await fetch('http://localhost:9999/api/offers')

        if (!response.ok) {
            history.push('/')
        } else {
            const data = await response.json()
            console.log(data)
            setOffers(data)
        }
    }

    useEffect(() => {
        getOffers()
    }, [])

    return (
        <PageLayout>
            <OffersContainer className='container'>
                <h2>Get the best</h2>
                <div>
                    <OffersList>
                        {offers ? (
                            offers.map((offer) => (
                                <OfferItem
                                    key={offer.id}
                                    name={offer.name}
                                    imgBckgr={offer.imgUrl}
                                />
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}
                    </OffersList>
                </div>
            </OffersContainer>
        </PageLayout>
    )
}

export default Offers
