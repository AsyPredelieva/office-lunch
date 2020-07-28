import styled from 'styled-components'

export const OfferDetailsStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 0;
    background-image: url('../../assets/offer-details-bckgr.png'),
        url('../../assets/offer-details-bckgr_.png');
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

export const OrderDetail = styled.div`
    display: flex;
    align-items: center;

    .form-field {
        max-width: 50px;
        display: inline-block;
        padding: 2px 5px;

        input {
            padding: 0;
        }
    }

    .price {
        margin: 0 40px;
        flex-grow: 1;
        flex-basis: 0;
    }
`

export const CurrentOrderStyled = styled.div`
    margin-top: 60px;
    text-align: center;
`

export const TotalPrice = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
    justify-content: flex-end;

    strong:last-child {
        margin-left: 10px;
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
