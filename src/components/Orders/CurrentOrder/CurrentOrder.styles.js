import styled from 'styled-components'

export const CurrentOrderStyled = styled.div`
    margin-top: 60px;
    text-align: center;
`

export const CurrentOrderList = styled.ul`
    width: 570px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;

    & > li {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 17px;
    }
`

export const TotalPrice = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
    justify-content: flex-end;

    strong:last-child {
        margin-left: 10px;
    }
`
