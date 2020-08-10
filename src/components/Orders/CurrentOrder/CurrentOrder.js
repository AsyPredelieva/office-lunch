import React from 'react'
import CurrentOrderItem from '../CurrentOrderItem/CurrentOrderItem'
import { CurrentOrderStyled, CurrentOrderList, TotalPrice } from './CurrentOrder.styles'

const CurrentOrder = ({ updatedOrder, totalSum, handleOrder }) => {
    const removeCurrItem = (index) => {
        const currItem = updatedOrder[index]
        const currOrder = updatedOrder.filter((el) => el.name !== currItem.name)

        handleOrder(currOrder)
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
            <button className='cta-btn'>Order</button>
        </CurrentOrderStyled>
    )
}

export default CurrentOrder
