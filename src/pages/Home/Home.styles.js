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

    /*.parallax-item {
        position: absolute;
        z-index: -1;

         &.tomato-left {
            top: 27%;
            left: 17%;
        }

        &.tomato-right {
            top: 1%;
            right: 3%;
        }

        &.olive {
            top: 21%;
            right: 10%;
        }

        &.chuska-left {
            top: 57%;
            left: 20%;
        }

        &.chuska-right {
            top: 60%;
            right: 12%;
        }
    } */

    .container {
        z-index: 1;
    }
`

/* Responsive */
// @media screen and(max-width: 768px) {
//     .quotes-container {
//         font-size: 22px;
//     }
// }
