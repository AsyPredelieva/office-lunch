import React from 'react'
import PageLayout from '../page-layout'
import OfferItem from '../../components/Offers/OfferItem/OfferItem'
import { OffersContainer } from './offers.styles'

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
                    <ul className='offers'>
                        <OfferItem />
                    </ul>
                </div>
            </OffersContainer>
        </PageLayout>
    )
}

export default Offers
