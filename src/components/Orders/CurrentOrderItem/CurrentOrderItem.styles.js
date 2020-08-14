import styled from 'styled-components'

export const OrderDetail = styled.div`
    display: flex;

    .price {
        width: 80px;
        margin: 0 0 0 40px;
        font-weight: 500;
        text-align: right;

        @media screen and(max-width: 640px) {
            width: 60px;
        }

        &.large {
            margin: 0 100px 0 40px;

            @media screen and(max-width: 640px) {
                margin: 0 20px 0 17px;
            }
        }
    }

    .remove-icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        cursor: pointer;
    }
`
