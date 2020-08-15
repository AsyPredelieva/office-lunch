import React, { useEffect, useState } from 'react'
import PageLayout from '../../PageLayout'
import OfferItem from '../../../components/Offers/OfferItem/OfferItem'
import Loader from '../../../components/common/Loader/Loader'
import { getOffers } from '../../../services/getOffers'
import { OffersContainer, OffersList } from './OffersList.styles'

const Offers = () => {
    const [offers, setOffers] = useState([])

    // const getOffers = async () => {
    //     const response = await fetch('http://localhost:9999/api/offers')

    //     if (!response.ok) {
    //         history.push('/')
    //     } else {
    //         const data = await response.json()

    //         setOffers(data)
    //     }
    // }

    useEffect(() => {
        getOffers().then((data) => setOffers(data))
    }, [])

    return (
        <PageLayout>
            <OffersContainer className='container'>
                <h2>Get the best</h2>
                <div>
                    <OffersList>
                        {offers.length !== 0 ? (
                            offers.map((offer) => (
                                <OfferItem
                                    key={offer.id}
                                    name={offer.name}
                                    imgBckgr={offer.imgUrl}
                                />
                            ))
                        ) : (
                            <Loader />
                        )}
                    </OffersList>
                </div>
            </OffersContainer>
        </PageLayout>
    )
}

export default Offers
