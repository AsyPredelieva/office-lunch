import React from 'react'
import removeIcon from '../../../assets/icon-remove.svg'
import { OrderDetail } from './CurrentOrderItem.styles'

const CurrentOrderItem = ({ id, name, count, price, removeCurrItem }) => {
    return (
        <li>
            <span>{name}</span>
            <OrderDetail>
                <span>{count}</span>
                <span className='large price'>{price.toFixed(2)} lv</span>
                <span onClick={() => removeCurrItem(id)} className='remove-icon'>
                    <img src={removeIcon} className='remove-icon' />
                </span>
            </OrderDetail>
        </li>
    )
}

export default CurrentOrderItem
