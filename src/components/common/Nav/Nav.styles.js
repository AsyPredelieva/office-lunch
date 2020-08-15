import styled from 'styled-components'

export const NavStyled = styled.nav`
    & > ul {
        display: flex;
        align-items: center;
        margin: 0;
        z-index: 1;

        li {
            margin: 0 30px;
            position: relative;

            @media screen and (max-width: 960px) {
                margin: 0 20px;
            }

            &:not(:last-child):after {
                content: '';
                width: 1px;
                height: 35px;
                background: rgba(33, 147, 208, 0.3);
                position: absolute;
                top: -7px;
                right: -30px;

                @media screen and (max-width: 960px) {
                    right: -20px;
                }
            }

            a {
                text-decoration: none;
                color: #545454;
                font-weight: 500;
                transition: all 300ms linear;

                &.router-link-exact-active,
                &.router-link-active,
                &:hover,
                &.active {
                    color: #79c150;
                }

                &.logout {
                    cursor: pointer;
                }
            }
        }
    }

    .menu-icon {
        display: none;
        padding: 28px 20px;
        cursor: pointer;

        .nav-icon {
            width: 30px;
            height: 2px;
            display: block;
            position: relative;
            background: #79c150;

            &:before,
            &:after {
                content: '';
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                background: #79c150;
                transition: all 0.3s linear;
            }

            &:before {
                top: 7px;
            }

            &:after {
                top: -7px;
            }
        }
    }

    .menu-btn,
    .sub-menu-btn,
    .sub-menu-icon {
        display: none;
    }
`
