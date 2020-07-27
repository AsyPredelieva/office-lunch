import styled from 'styled-components'

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    z-index: 1;
`

export const Li = styled.li`
    margin: 0 30px;
    position: relative;

    &:not(:last-child):after {
        content: '';
        width: 1px;
        height: 35px;
        background: rgba(33, 147, 208, 0.3);
        position: absolute;
        top: -7px;
        right: -30px;
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
            }*/
`

export const MenuIcon = styled.label`
    display: none;
    padding: 28px 20px;
    cursor: pointer;
`

export const NavIcon = styled.span`
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
`

export const MenuBtn = styled.input`
    /* .sub-menu-btn,
    .sub-menu-icon { */
    display: none;
`

/* Responsive */
// @media screen and (max-width: 960px) {
//     nav ul li,
//     nav.topnav ul li {
//         margin: 0 20px;

//         &:not(:last-child):after {
//             right: -20px;
//         }
//     }
// }

/* Top navigation - desktop/tablet */
// @media screen and (min-width: 768px) {
//     nav.topnav {
//         & > ul {
//             li {
//                 &.sub-nav {
//                     &:hover,
//                     &:focus {
//                         & > a {
//                             padding-bottom: 45px;
//                         }

//                         & > ul {
//                             display: block;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

/* Top navigation - mobile */
// @media screen and (max-width: 768px) {
//     nav.topnav {
//         & > ul {
//             width: 100%;
//             position: absolute;
//             top: 100px;
//             left: 0;
//             background: #fff;
//             flex-direction: column;
//             align-items: flex-start;
//             opacity: 0;
//             visibility: hidden;
//             z-index: 1;

//             li {
//                 width: 100%;
//                 margin: 0;
//                 background: #fff;
//                 opacity: 0;
//                 -webkit-transform: translateY(-40px);
//                 transform: translateY(-40px);
//                 -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
//                 animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);

//                 &:last-child {
//                     box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
//                 }

//                 &:not(:last-child) {
//                     border-bottom: 1px solid rgba(33, 147, 208, 0.3);
//                 }

//                 &:after {
//                     display: none;
//                 }

//                 & > a {
//                     display: inline-block;
//                     width: 100%;
//                     padding: 7px 30px;
//                     font-size: 16px;
//                     line-height: 1.5;
//                     text-decoration: none;
//                     transition: 1s all;
//                     box-sizing: border-box;

//                     &:link,
//                     &:visited {
//                         color: #314a57;
//                     }

//                     &:focus,
//                     &:hover {
//                         color: #20232d;
//                     }
//                 }

//                 &.sub-nav {
//                     &:hover,
//                     &:focus {
//                         & > a {
//                             padding-bottom: 8px;
//                         }
//                     }

//                     .sub-menu-icon {
//                         display: block;
//                         position: absolute;
//                         width: 100%;
//                         height: 100%;
//                         top: 0;
//                         left: 0;

//                         &:after {
//                             content: '';
//                             width: 3px;
//                             height: 3px;
//                             position: absolute;
//                             top: 10px;
//                             right: 20px;
//                             border: solid rgba(33, 147, 208, 0.3);
//                             border-width: 0 3px 3px 0;
//                             display: inline-block;
//                             padding: 3px;
//                             transform: rotate(45deg);
//                             -webkit-transform: rotate(45deg);
//                         }
//                     }

//                     .sub-menu-btn {
//                         display: none;

//                         &:checked ~ ul {
//                             display: block;
//                             opacity: 1;
//                             visibility: visible;

//                             li {
//                                 opacity: 1;
//                                 -webkit-transform: translateY(0px);
//                                 transform: translateY(0px);
//                                 -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
//                                 transition: transform 0.2s, opacity 0.2s;
//                             }
//                         }
//                     }

//                     & > ul {
//                         position: relative;
//                         top: auto;
//                         left: auto;
//                         min-width: 100%;
//                         width: 100%;
//                         margin-bottom: 0;
//                         border-bottom: 0;
//                         display: none;
//                         opacity: 0;
//                         visibility: hidden;
//                         box-shadow: none;

//                         li {
//                             padding-left: 30px;
//                             opacity: 0;
//                             -webkit-transform: translateY(-40px);
//                             transform: translateY(-40px);
//                             -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
//                             animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
//                             box-sizing: border-box;

//                             &:first-child {
//                                 border-top: 1px solid rgba(33, 147, 208, 0.3);
//                             }

//                             &:before {
//                                 content: '';
//                                 width: 1px;
//                                 height: 1px;
//                                 position: absolute;
//                                 top: 15px;
//                                 left: 27px;
//                                 border: solid rgba(33, 147, 208, 0.3);
//                                 border-width: 0 3px 3px 0;
//                                 display: inline-block;
//                                 padding: 3px;
//                                 transform: rotate(-45deg);
//                                 -webkit-transform: rotate(-45deg);
//                             }

//                             a {
//                                 border-bottom: 0;
//                                 padding: 8px 20px;
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//         .menu-btn {
//             &:checked ~ ul,
//             &:checked ~ .sub-nav + ul {
//                 opacity: 1;
//                 visibility: visible;

//                 & > li {
//                     opacity: 1;
//                     -webkit-transform: translateY(0px);
//                     transform: translateY(0px);
//                     -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
//                     transition: transform 0.2s, opacity 0.2s;
//                 }
//             }

//             &:checked ~ .menu-icon .nav-icon {
//                 background: transparent;

//                 &:before {
//                     transform: rotate(-45deg);
//                 }

//                 &:after {
//                     transform: rotate(45deg);
//                 }
//             }

//             &:checked ~ .menu-icon:not(.steps) .nav-icon {
//                 &:before,
//                 &:after {
//                     top: 0;
//                 }
//             }
//         }

//         .menu-icon {
//             display: block;
//         }
//     }
// }

// @media screen and (max-width: 640px) {
//     nav.topnav {
//         & > ul {
//             top: 70px;
//         }

//         .menu-icon {
//             padding: 20px 10px;
//         }
//     }
// }
