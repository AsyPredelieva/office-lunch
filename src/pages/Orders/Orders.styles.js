import styled from 'styled-components'
import ordersBckgr1 from '../../assets/orders-bckgr_1.png'
import ordersBckgr4 from '../../assets/orders-bckgr_4.png'
import ordersBckgr2 from '../../assets/orders-bckgr_2.png'
import ordersBckgr5 from '../../assets/orders-bckgr_5.png'

export const OrdersContainer = styled.div`
    width: 100%;
    padding: 40px 0;
    background-image: url(${ordersBckgr1}), url(${ordersBckgr4}), url(${ordersBckgr2}),
        url(${ordersBckgr5});
    background-position: top right, bottom 20% left, top 10% left, bottom right, top 75% left;
    background-repeat: no-repeat;
    background-size: 30%, 35%, 30%, 45%, 25%;

    &.empty {
        height: 100%;
        background-image: url(/img/orders-bckgr_1.8620d82d.png),
            url(/img/orders-bckgr_2.afc6aa11.png);
        background-position: top right, top 10% left;
        background-repeat: no-repeat;
        background-size: 30%;
    }
`

export const CurrentOrderStyled = styled.div`
    width: 570px;
    max-width: 100%;
    padding: 20px;
    margin: 0 auto 40px auto;
    text-align: left;
    border: 1px solid rgba(33, 147, 208, 0.3);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;

    h3 {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(33, 147, 208, 0.3);
    }

    & > ul > li {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 17px;
    }

    .total-price {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        border-top: 1px solid rgba(33, 147, 208, 0.3);
    }
`

// @media screen and(max-width: 768px) {
//     .current-order {
//         width: 100%;
//     }
// }
