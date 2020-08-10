import React, { useState } from 'react'
import CurrentOrderItem from '../CurrentOrderItem/CurrentOrderItem'
import getCookie from '../../../utils/getCookie'
import { CurrentOrderStyled, CurrentOrderList, TotalPrice } from './CurrentOrder.styles'

const CurrentOrder = ({ updatedOrder, totalSum, handleOrder }) => {
    const [post, setPost] = useState(updatedOrder)
    const [currentOrder, setCurrentdOrder] = useState([])

    const removeCurrItem = (index) => {
        const currItem = updatedOrder[index]
        const currOrder = updatedOrder.filter((el) => el.name !== currItem.name)

        handleOrder(currOrder)
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()
        // await fetch('http://localhost:9999/api/orders', {
        //     method: 'POST',
        //     body: JSON.stringify({ order: currentOrder }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: getCookie('x-auth-token'),
        //     },
        // })
        // setPost([])
        // setCurrentdOrder(() => [...updatedOrder])
    }

    return (
        <CurrentOrderStyled>
            <h3>I'll take for lunch:</h3>
            <CurrentOrderList>
                {updatedOrder?.map((item, index) => (
                    <CurrentOrderItem
                        key={index}
                        id={index}
                        name={item.name}
                        count={item.count}
                        price={item.sum}
                        removeCurrItem={removeCurrItem}
                    />
                ))}
            </CurrentOrderList>
            <TotalPrice>
                <strong>Total sum:</strong>
                <strong>{totalSum} lv</strong>
            </TotalPrice>
            <button type='submit' className='cta-btn' onClick={(e) => handleSubmit(e)}>
                Order
            </button>
        </CurrentOrderStyled>
    )
}

export default CurrentOrder
