import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { NavStyled } from './Nav.styles'
import UserContext from '../../../Context'

const Nav = () => {
    const context = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    return (
        <NavStyled>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul>
                <li>
                    <NavLink to='/' exact={true} activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='sub-nav'>
                    <NavLink to='/offers' activeClassName='active'>
                        Offers
                    </NavLink>
                    <input className='sub-menu-btn' type='checkbox' id='sub-menu-btn' />
                    <label className='sub-menu-icon' htmlFor='sub-menu-btn'>
                        <span className='nav-icon'></span>
                    </label>
                </li>
                {context.user && context.user.isAuth ? (
                    <>
                        <li className='sub-nav'>
                            <NavLink to='/orders' activeClassName='active'>
                                Orders
                            </NavLink>
                        </li>
                        <li className='sub-nav'>
                            <NavLink to='/MyOrders' activeClassName='active'>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            {/* eslint-disable-next-line */}
                            <a onClick={logOut} className='logout'>
                                Logout
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='/login' activeClassName='active'>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' activeClassName='active'>
                                Register
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </NavStyled>
    )
}

export default Nav
