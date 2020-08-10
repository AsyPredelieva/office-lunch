import styled from 'styled-components'
import offerDetailsBckgr from '../../../assets/offer-details-bckgr.png'
import offerDetailsBckgrRight from '../../../assets/offer-details-bckgr_.png'

export const OfferDetailsStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 0;
    background-image: url(${offerDetailsBckgr}), url(${offerDetailsBckgrRight});
    background-position: left top, right bottom 20%;
    background-repeat: no-repeat;
    background-size: 25%;
`

export const OfferMenuList = styled.ul`
    width: 570px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;

    & > li > ul > li {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 17px;
    }
`

// @media screen and(max - width: 768px) {
//     .order - detail.price {
//         margin: 0 10px;
//     }
// }

// @media screen and(max - width: 640px) {
//     .offer - menu {
//         font - size: 14px;

//         .name {
//             width: 45%;
//             padding - right: 5px;
//         }
//     }

//     .order - detail.form - field {
//         max - width: 35px;
//     }
// }
