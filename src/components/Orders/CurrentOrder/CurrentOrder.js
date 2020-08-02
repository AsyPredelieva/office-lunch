import React from 'react'
import { OrderDetail } from './CurrentOrder.styles'

const CurrentOrder = () => {
    return (
        <li>
            {/* <span slot='my-current-order'>CurrentOrder name</span> */}
            <OrderDetail>
                <span>2</span>
                <span className='price'>5.50 lv</span>
                <a class='remove-icon'>
                    {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                        viewBox='0 0 12 12'
                        version='1.1'
                        fill='#74b4c4'>
                        <polygon points='.75 .043 .043 .75 .398 1.102 5.293 6 .043 11.25 .75 11.957 6 6.707 10.895 11.605 11.25 11.957 11.957 11.25 11.605 10.895 6.707 6 11.957 .75 11.25 .043 6 5.293 1.102 .398' />
                    </svg> */}
                </a>
            </OrderDetail>
        </li>
    )
}

export default CurrentOrder