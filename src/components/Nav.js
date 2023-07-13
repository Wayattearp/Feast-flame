import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/booking">MENU</Link>
            <Link to="/booking">FIND US</Link>
            <Link to="/booking">RESERVATIONS</Link>
            <Link to="/booking">ORDER ONLINE</Link>
            <Link to="/booking">ABOUT</Link>
        </nav>
    )
}
export default Nav