import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../PageLayout'
import Loader from '../../components/common/Loader/Loader'
import CurrentOrderItem from '../../components/Orders/CurrentOrderItem/CurrentOrderItem'
import { OrdersContainer, CurrentOrderStyled } from '../Orders/Orders.styles'
import UserContext from '../../Context'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const context = useContext(UserContext)
    const history = useHistory()

    const getMyOrders = async () => {
        const response = await fetch('http://localhost:9999/api/orders')

        if (!response.ok) {
            history.push('/')
        } else {
            const data = await response.json()

            console.log('My orders data: ', data)
            console.log('User data: ', context.user)
            const myOrder = data.filter((e) => e.author._id === context.user.id)
            // myOrder.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt))

            setMyOrders(myOrder)
        }
    }

    useEffect(() => {
        getMyOrders()
    }, [])

    return (
        <PageLayout>
            <OrdersContainer>
                <div className='container'>
                    <h2>All orders</h2>
                    <div>
                        {myOrders ? (
                            <ul>
                                {myOrders.map((order) => (
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

export default MyOrders
