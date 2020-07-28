import React from 'react'
import PageLayout from '../../page-layout'
import OfferItem from '../../../components/Offers/OfferItem/OfferItem'
import { OffersContainer, OffersList } from './offersList.styles'

const Offers = () => {
    return (
        <PageLayout>
            <OffersContainer className='container'>
                <h2>Get the best</h2>
                {/* if="!offersList" */}
                {/* <div>
                <Loader />
            </div> */}
                <div>
                    <OffersList>
                        <OfferItem />
                    </OffersList>
                </div>
            </OffersContainer>
        </PageLayout>
    )
}

export default Offers
