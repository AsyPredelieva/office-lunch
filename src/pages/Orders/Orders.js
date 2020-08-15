import React, { useState, useEffect } from 'react'
import PageLayout from '../PageLayout'
import { getOrders } from '../../services/getOrders'
import Loader from '../../components/common/Loader/Loader'
import CurrentOrderItem from '../../components/Orders/CurrentOrderItem/CurrentOrderItem'
import { OrdersContainer, CurrentOrderStyled } from './Orders.styles'

const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders().then((data) => setOrders(data))
    }, [])

    console.log(orders)
    return (
        <PageLayout>
            <OrdersContainer>
                <div className='container'>
                    <h2>All orders</h2>
                    <div>
                        {orders.length !== 0 ? (
                            <ul>
                                {orders.map((order) => (
                                    <li key={order._id}>
                                        <CurrentOrderStyled className='current-order'>
                                            <h3>
                                                <span>{order.author.username}'s Order</span>
                                                <span>
                                                    {order.created_at
                                                        .toString()
                                                        .slice(0, 19)
                                                        .replace(/-/g, '/')
                                                        .replace('T', ' ')}
                                                </span>
                                            </h3>
                                            <ul>
                                                {order.order?.map((item) => (
                                                    <CurrentOrderItem
                                                        key={item._id}
                                                        id={item._id}
                                                        name={item.name}
                                                        count={item.count}
                                                        price={item.sum}
                                                    />
                                                ))}
                                            </ul>
                                            <div className='total-price'>
                                                <strong>Total sum:</strong>
                                                <strong>{order.totalSum.toFixed(2)} lv</strong>
                                            </div>
                                        </CurrentOrderStyled>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </OrdersContainer>
        </PageLayout>
    )
}

export default Orders
