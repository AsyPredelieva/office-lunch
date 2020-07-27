import styled from 'styled-components'
import quick from '../../../assets/icon-quick-easy.png'
import fast from '../../../assets/icon-fast.png'
import gently from '../../../assets/icon-gentle.png'

export const Li = styled.li`
    border: 1px solid rgba(33, 147, 208, 0.3);
    padding: 120px 20px 20px;
    box-sizing: border-box;
    text-align: center;

    &.quick {
        background: url(${quick}) center 20px no-repeat;
        background-size: 85px;
    }

    &.easy {
        background: url(${fast}) center -50px no-repeat;
        background-size: 155px;
    }

    &.gently {
        background: url(${gently}) center 30px no-repeat;
        background-size: 95px;
    }

    strong {
        display: block;
        font-size: 20px;
    }
`

/* Responsive */
// @media screen and(max - width: 960px) {
//     li strong {
//         font - size: 18px;
//     }
// }
