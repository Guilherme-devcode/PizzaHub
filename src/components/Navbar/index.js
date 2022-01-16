import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './Navbar';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizza <span>hub</span></NavLink>
                <NavIcon>
                    <p className='menu'>Menu</p>
                    <Bars className='bars'/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
