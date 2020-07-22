import styled from 'styled-components'
import heroImg from '../../assets/hero.jpg'
import shining from '../../assets/shining.png'

export const HeroStyled = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${heroImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 40px;
    box-shadow: inset -1px -1px 7px rgba(0, 0, 0, 0.2);

    &:after {
        animation: shine ease-in 2s 3 reverse;
        animation-fill-mode: forwards;
        content: '';
        background: url(${shining}) no-repeat;
        position: absolute;
        top: -5px;
        right: 50%;
        margin-right: -555px;
        width: 150px;
        height: 150px;
        opacity: 0;
        transform: rotate(30deg);
    }

    &:active:after {
        opacity: 0;
    }
`

export const Intro = styled.div`
    width: 45%;
    text-align: left;
    font-size: 20px;
    padding-top: 55px;

    p {
        margin-bottom: 35px;
    }

    .cta-btn {
        font-size: 16px;
        line-height: 1.4;
    }
`

// const shine = keyframes`
//     0% {
//         opacity: 0;
//         -webkit-transform: scale(0.5) rotate(0deg);
//         transform: scale(0.5) rotate(0deg);
//     }
//     70% {
//         opacity: 0.5;
//         -webkit-transform: scale(1.5) rotate(360deg);
//         transform: scale(1.5) rotate(360deg);
//     }
//     100% {
//         opacity: 0;
//         -webkit-transform: scale(0.1) rotate(0deg);
//         transform: scale(0.1) rotate(0deg);
//     }
// `
