import styled from 'styled-components'
import quotesBckgr from '../../assets/quotes-bckgr.jpg'
import infoBckgr from '../../assets/info-bckgr.png'

export const QuotesContainer = styled.div`
    width: 100%;
    background: url(${quotesBckgr}) center center no-repeat;
    background-size: cover;
    box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 40px 0;
    font-size: 32px;
    line-height: 1.4;
    font-style: italic;
`

export const InfoContainer = styled.div`
    position: relative;
    padding: 40px 0 60px;
    background-image: url(${infoBckgr}), url(${infoBckgr});
    background-position: left -150% center, right -150% center;
    background-repeat: no-repeat;
    background-size: 75%;
    overflow: hidden;

    .parallax-banner,
    .parallax-outer {
        position: absolute !important;
        height: 518px !important;
        top: 0px !important;
    }

    .parallax-banner-layer-0,
    .parallax-banner-layer-1,
    .parallax-banner-layer-2,
    .parallax-banner-layer-3,
    .parallax-banner-layer-4 {
        background-size: auto !important;
        background-repeat: no-repeat;
        bottom: auto !important;
        width: 200px;
        height: 200px;
        z-index: -1;
    }

    .parallax-banner-layer-0 {
        top: 3% !important;
        left: 13% !important;
        right: auto !important;
    }

    .parallax-banner-layer-1 {
        top: 1% !important;
        right: 3% !important;
        left: auto !important;
    }

    .parallax-banner-layer-2 {
        top: 21% !important;
        right: 10% !important;
        left: auto !important;
    }

    .parallax-banner-layer-3 {
        top: 57% !important;
        left: 15% !important;
        right: auto !important;
    }

    .parallax-banner-layer-4 {
        top: 60% !important;
        right: 9% !important;
        left: auto !important;
    }

    .container {
        position: relative;
        z-index: 1;
    }
`

/* Responsive */
// @media screen and(max-width: 768px) {
//     .quotes-container {
//         font-size: 22px;
//     }
// }
