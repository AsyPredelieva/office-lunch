import React from 'react'
import { OrderDetail } from './Menu.styles'

const Menu = ({ category, count, setCount, addOrderItem }) => {
    console.log('Category --->', category)
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
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                            </div>
                            <span className='price'>{item.price} lv</span>
                            <button
                                type='button'
                                className='primary-button'
                                onClick={() => addOrderItem(item.name, count, item.price)}>
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
