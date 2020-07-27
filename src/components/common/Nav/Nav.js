import React from 'react'
import { Link } from 'react-router-dom'
import { Ul, Li, MenuBtn, MenuIcon, NavIcon } from './Nav.styles'

const Nav = () => {
    return (
        <nav>
            <MenuBtn type='checkbox' id='menu-btn' />
            <MenuIcon htmlFor='menu-btn'>
                <NavIcon />
            </MenuIcon>
            <Ul>
                <Li>
                    <Link to='/' exact='true'>
                        Home
                    </Link>
                </Li>
                {/* <template v-if='isAuthenticated'> */}
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
                {/* 
                <li className='sub-nav'>
                    <Link to='/orders'>Orders</Link>
                </li>
                <li className='sub-nav'>
                    <Link to='/MyOrders'>My Orders</Link>
                </li>
                <li>
                    <a onClick={onLogout} className='logout'>
                        Logout
                    </a>
                </li> */}
                {/* </template> */}
                <>
                    <Li>
                        <Link to='/login'>Login</Link>
                    </Li>
                    <Li>
                        <Link to='/register'>Register</Link>
                    </Li>
                </>
            </Ul>
        </nav>
    )
}

export default Nav
