import React from 'react'
import PageLayout from '../PageLayout'
import CurrentOrderItem from '../../components/Orders/CurrentOrderItem/CurrentOrderItem'
import { OrdersContainer, CurrentOrderStyled } from './Orders.styles'

const Orders = () => {
    return (
        <PageLayout>
            <OrdersContainer>
                <div className='container'>
                    <h2>All orders</h2>
                    {/* if="!orderList"
                <div>
                    <Loader />
                </div> */}
                    <div>
                        <ul>
                            <li>
                                <CurrentOrderStyled className='current-order'>
                                    <h3>
                                        <span>Order</span>
                                        <span>12.08.2020</span>
                                    </h3>
                                    <ul>
                                        <CurrentOrderItem />
                                    </ul>
                                    <div className='total-price'>
                                        <strong>Total sum:</strong>
                                        <strong>7.90 lv</strong>
                                    </div>
                                </CurrentOrderStyled>
                            </li>
                        </ul>
                    </div>
                </div>
            </OrdersContainer>
        </PageLayout>
    )
}

export default Orders
