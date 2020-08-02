import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavStyled } from './Nav.styles'
import UserContext from '../../../Context'

class Nav extends Component {
    static contextType = UserContext

    render() {
        const { isAuth } = this.context

        return (
            <NavStyled>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' htmlFor='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul>
                    <li>
                        <Link to='/' exact='true'>
                            Home
                        </Link>
                    </li>
                    <li className='sub-nav'>
                        <Link to='/offers'>Offers</Link>
                        <input className='sub-menu-btn' type='checkbox' id='sub-menu-btn' />
                        <label className='sub-menu-icon' htmlFor='sub-menu-btn'>
                            <span className='nav-icon'></span>
                        </label>
                        <ul>
                            <li>
                                <Link to={'/offers/Kamenica'}>Kamenica</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='sub-nav'>
                        <Link to='/orders'>Orders</Link>
                    </li>
                    {/* 
                <li className='sub-nav'>
                    <Link to='/MyOrders'>My Orders</Link>
                </li>
                <li>
                    <a onClick={onLogout} className='logout'>
                        Logout
                    </a>
                </li> */}
                    {/* </template> */}
                    {!isAuth && (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </NavStyled>
        )
    }
}

export default Nav
