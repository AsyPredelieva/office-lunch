import styled from 'styled-components'

export const QuoteStyled = styled.p`
    width: 100%;
    padding: 0 0 55px;
    margin-bottom: 0;
    position: relative;

    @media screen and(max-width: 768px) {
        font-size: 18px;
    }

    small {
        font-size: 18px;
        font-style: normal;
        position: absolute;
        right: 0px;
        bottom: 20px;

        @media screen and(max-width: 768px) {
            font-size: 14px;
        }
    }
`
