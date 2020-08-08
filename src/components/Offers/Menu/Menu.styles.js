import styled from 'styled-components'

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
