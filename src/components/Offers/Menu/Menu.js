import React, { useState } from 'react'
import { OrderDetail } from './Menu.styles'

const Menu = ({ category, handleOrder }) => {
    // get input value - order item count
    const [currCount, setCurrCount] = useState({})
    const [updatedCount, setUpdatedCount] = useState([])

    const handleChange = (e, index) => {
        const currOrderItem = {
            itemId: index,
            itemCount: e.target.value,
        }

        setCurrCount(currOrderItem)
        setUpdatedCount((orderItems) => [...orderItems, currOrderItem])
    }

    // onClick Add order item
    const addOrderItem = (name, count, price) => {
        const sum = Number(count) * Number(price)
        const currOrder = { name, count, sum }

        handleOrder((prevOrder) => {
            prevOrder &&
                prevOrder.map((el) => {
                    if (el.name === name) {
                        const index = prevOrder.indexOf(el)

                        index > -1 && prevOrder.splice(index, 1)
                    }
                })

            return [...prevOrder, currOrder]
        })
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
                                    value={currCount.itemIndex}
                                    onChange={(e) => handleChange(e, item.id)}
                                />
                            </div>
                            <span className='price'>{item.price} lv</span>
                            <button
                                type='button'
                                className='primary-button'
                                onClick={() =>
                                    addOrderItem(item.name, currCount.itemCount, item.price)
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
