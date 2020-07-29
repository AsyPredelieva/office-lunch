import React from 'react'
import PageLayout from '../PageLayout'
import CurrentOrder from '../../components/Orders/CurrentOrder/CurrentOrder'
import { OrdersContainer, CurrentOrderStyled } from './Orders.styles'

const Orders = () => {
    return (
        <PageLayout>
            <OrdersContainer>
                <div class='container'>
                    <h2>All orders</h2>
                    {/* if="!orderList"
                <div>
                    <Loader />
                </div> */}
                    <div>
                        <ul>
                            <li>
                                <CurrentOrderStyled class='current-order'>
                                    <h3>
                                        <span>Order</span>
                                        <span>12.08.2020</span>
                                    </h3>
                                    <ul>
                                        <CurrentOrder />
                                    </ul>
                                    <div class='total-price'>
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
