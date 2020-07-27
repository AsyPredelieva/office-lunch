import styled from 'styled-components'
import Nav from '../Nav/Nav'
import Logo from '../Logo/logo'

export const FooterStyled = styled.footer`
    width: 100%;
    min-height: 200px;
    border-top: 3px solid rgba(33, 147, 208, 0.3);
    padding: 20px 0 10px;
    background: url(../../assets/footer-bckgr.jpg) no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const FooterNav = styled(Nav)`
    display: inline-block;
    margin: 0 auto;

    ul li.sub-nav {
        &:hover,
        &:focus {
            & > a {
                padding-top: 45px;
            }

            & > ul {
                display: block;
            }
        }

        & > ul {
            top: -194px;
            box-shadow: 1px -1px 5px rgba(0, 0, 0, 0.2);
        }
    }
`

export const FooterLogo = styled(Logo)`
    width: 80px;
`
