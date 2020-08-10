import React, { useContext, useState, useEffect } from 'react'
import OrderContext from '../../../Context'
import { OrderDetail } from './Menu.styles'

const Menu = ({ category, handleOrder }) => {
    // get input value - order item count
    const [itemCount, setItemCount] = useState({})
    const [updatedCount, setUpdatedCount] = useState([])

    const handleChange = (e, index) => {
        const itemCount = e.target.value
        const currOrder = {
            itemId: index,
            itemCount,
        }

        setItemCount(currOrder)
        setUpdatedCount((updatedCountArr) => [...updatedCountArr, currOrder])
    }

    // onClick Add order item
    const [price, setPrice] = useState('')
    const [orderItem, setOrderItem] = useState({})
    const [updatedOrder, setUpdatedOrder] = useState([])
    const [isAdded, setIsAdded] = useState(true)

    const addOrderItem = (name, count, price) => {
        const sum = Number(count) * Number(price)

        setPrice(sum)

        const currOrder = { name, count, sum }

        setOrderItem(currOrder)
        setUpdatedOrder((prevOrder) => [...prevOrder, currOrder])
        handleOrder((prevOrder) => [...prevOrder, currOrder])
    }

    return (
        <li category={category}>
            <h3>{category.name}</h3>
            <ul>
                {category?.menuItems?.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <span className='name'>{item.name}</span>
                        <OrderDetail>
                            <div className='form-field'>
                                <input
                                    type='text'
                                    placeholder='0'
                                    value={itemCount.itemIndex}
                                    onChange={(e) => handleChange(e, item.id)}
                                />
                            </div>
                            <span className='price'>{item.price} lv</span>
                            <button
                                type='button'
                                className='primary-button'
                                onClick={() =>
                                    addOrderItem(item.name, itemCount.itemCount, item.price)
                                }>
                                Add
                            </button>
                        </OrderDetail>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Menu
