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

    @media screen and (max-width: 640px) {
        height: 70px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        nav {
            & > ul {
                width: 100%;
                position: absolute;
                top: 100px;
                left: 0;
                background: #fff;
                flex-direction: column;
                align-items: flex-start;
                opacity: 0;
                visibility: hidden;
                z-index: 1;

                li {
                    width: 100%;
                    margin: 0;
                    background: #fff;
                    opacity: 0;
                    -webkit-transform: translateY(-40px);
                    transform: translateY(-40px);
                    -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
                    animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);

                    &:last-child {
                        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
                    }

                    &:not(:last-child) {
                        border-bottom: 1px solid rgba(33, 147, 208, 0.3);
                    }

                    &:after {
                        display: none;
                    }

                    & > a {
                        display: inline-block;
                        width: 100%;
                        padding: 7px 30px;
                        font-size: 16px;
                        line-height: 1.5;
                        text-decoration: none;
                        transition: 1s all;
                        box-sizing: border-box;

                        &:link,
                        &:visited {
                            color: #314a57;
                        }

                        &:focus,
                        &:hover {
                            color: #20232d;
                        }
                    }

                    &.sub-nav {
                        &:hover,
                        &:focus {
                            & > a {
                                padding-bottom: 8px;
                            }
                        }

                        .sub-menu-icon {
                            /* display: block; */
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;

                            &:after {
                                content: '';
                                width: 3px;
                                height: 3px;
                                position: absolute;
                                top: 10px;
                                right: 20px;
                                border: solid rgba(33, 147, 208, 0.3);
                                border-width: 0 3px 3px 0;
                                display: inline-block;
                                padding: 3px;
                                transform: rotate(45deg);
                                -webkit-transform: rotate(45deg);
                            }
                        }

                        .sub-menu-btn {
                            display: none;

                            &:checked ~ ul {
                                display: block;
                                opacity: 1;
                                visibility: visible;

                                li {
                                    opacity: 1;
                                    -webkit-transform: translateY(0px);
                                    transform: translateY(0px);
                                    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
                                    transition: transform 0.2s, opacity 0.2s;
                                }
                            }
                        }

                        & > ul {
                            position: relative;
                            top: auto;
                            left: auto;
                            min-width: 100%;
                            width: 100%;
                            margin-bottom: 0;
                            border-bottom: 0;
                            display: none;
                            opacity: 0;
                            visibility: hidden;
                            box-shadow: none;

                            li {
                                padding-left: 30px;
                                opacity: 0;
                                -webkit-transform: translateY(-40px);
                                transform: translateY(-40px);
                                -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
                                animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
                                box-sizing: border-box;

                                &:first-child {
                                    border-top: 1px solid rgba(33, 147, 208, 0.3);
                                }

                                &:before {
                                    content: '';
                                    width: 1px;
                                    height: 1px;
                                    position: absolute;
                                    top: 15px;
                                    left: 27px;
                                    border: solid rgba(33, 147, 208, 0.3);
                                    border-width: 0 3px 3px 0;
                                    display: inline-block;
                                    padding: 3px;
                                    transform: rotate(-45deg);
                                    -webkit-transform: rotate(-45deg);
                                }

                                a {
                                    border-bottom: 0;
                                    padding: 8px 20px;
                                }
                            }
                        }
                    }
                }
            }

            .menu-btn {
                &:checked ~ ul,
                &:checked ~ .sub-nav + ul {
                    opacity: 1;
                    visibility: visible;

                    & > li {
                        opacity: 1;
                        -webkit-transform: translateY(0px);
                        transform: translateY(0px);
                        -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
                        transition: transform 0.2s, opacity 0.2s;
                    }
                }

                &:checked ~ .menu-icon .nav-icon {
                    background: transparent;

                    &:before {
                        transform: rotate(-45deg);
                    }

                    &:after {
                        transform: rotate(45deg);
                    }
                }

                &:checked ~ .menu-icon:not(.steps) .nav-icon {
                    &:before,
                    &:after {
                        top: 0;
                    }
                }
            }

            .menu-icon {
                display: block;
            }
        }
    }

    @media screen and (max-width: 640px) {
        nav.topnav {
            & > ul {
                top: 70px;
            }

            .menu-icon {
                padding: 20px 10px;
            }
        }
    }
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

    @media screen and (max-width: 640px) {
        font-size: 14px;
        padding-right: 30px;
        background-size: 25px;
        min-height: 55px;
    }
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
