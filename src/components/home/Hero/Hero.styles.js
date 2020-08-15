import styled from 'styled-components'
import heroImg from '../../../assets/hero.jpg'

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

    @media screen and (max-width: 768px) {
        background-position: center left;
    }
`

export const Intro = styled.div`
    width: 45%;
    text-align: left;
    font-size: 20px;
    padding-top: 55px;

    @media screen and (max-width: 768px) {
        padding-top: 0;
        width: 100%;
        text-align: center;
    }

    p {
        margin-bottom: 35px;
    }

    .cta-btn {
        font-size: 16px;
        line-height: 1.4;
    }
`
