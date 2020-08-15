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
                &:hover {
                    color: #79c150;
                }

                &.logout {
                    cursor: pointer;
                }
            }

            /* &.sub-nav {
                position: relative;

                &:hover,
                &:focus {
                    & > a {
                        padding-bottom: 45px;
                    }
                }

                & > ul {
                    display: none;
                    position: absolute;
                    top: 59px;
                    left: -30px;
                    background: #fff;
                    min-width: 190px;
                    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
                    z-index: 1;

                    @media screen and (min-width: 768px) {
                        display: block;
                    }

                    li {
                        width: 100%;
                        display: block;
                        margin: 0;

                        &::after {
                            display: none;
                        }

                        a {
                            width: 100%;
                            display: block;
                            padding: 10px 30px;
                            border-bottom: 1px solid rgba(33, 147, 208, 0.3);
                            box-sizing: border-box;
                        }
                    }
                }
            } */
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
