import React from 'react'
import PageLayout from '../../PageLayout'
// import CurrentOrder from '../../Orders/CurrentOrder'
import {
    OfferDetailsStyled,
    OfferMenuList,
    CurrentOrderStyled,
    OrderDetail,
    TotalPrice,
} from './OfferDetails.styles'

const OfferDetails = () => {
    return (
        <PageLayout>
            <OfferDetailsStyled>
                <div className='container'>
                    {/* if="!currentOffer"
                <div>
                    <Loader />
                </div> */}
                    <div>
                        <form>
                            <h2>Today's menu in Kamenica</h2>
                            <OfferMenuList>
                                <li>
                                    <h3>Starters</h3>
                                    <ul>
                                        <li>
                                            <span className='name'>Soup</span>
                                            <OrderDetail>
                                                <div className='form-field'>
                                                    <input type='text' placeholder='0' />
                                                </div>
                                                <span className='price'>2.50 lv</span>
                                                <button type='button' className='primary-button'>
                                                    Add
                                                </button>
                                            </OrderDetail>
                                        </li>
                                    </ul>
                                </li>
                            </OfferMenuList>
                            {/* if="isAdded" */}
                            <>
                                <CurrentOrderStyled>
                                    <h3>I'll take for lunch:</h3>
                                    <ul>{/* <CurrentOrder /> */}</ul>
                                    <TotalPrice>
                                        <strong>Total sum:</strong>
                                        <strong>4.50 lv</strong>
                                    </TotalPrice>
                                    <button className='cta-btn'>Order</button>
                                </CurrentOrderStyled>
                            </>
                        </form>
                    </div>
                </div>
            </OfferDetailsStyled>
        </PageLayout>
    )
}

export default OfferDetails
