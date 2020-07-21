import React from 'react'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 3px solid rgba(33, 147, 208, 0.3);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeBox = styled.span`
    font-size: 16px;
    padding-right: 80px;
    background: url('../../assets/welcome-icon.png') right center no-repeat;
    background-size: 50px;
    min-height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
`

// @media screen and (max-width: 640px) {
//     header {
//         height: 70px;
//     }

//     .welcome-box {
//         font-size: 14px;
//         padding-right: 30px;
//         background-size: 25px;
//         min-height: 55px;
//     }
// }
