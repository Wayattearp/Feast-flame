import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/booking">RESERVATIONS</Link>
            <Link to="/menu">MENU</Link>
            <Link to="/feast-flame">ABOUT</Link>
            <a href="https://www.linkedin.com/in/anton-miles/" target="_blank">FIND US</a>
            <Link to="/menu">ORDER ONLINE</Link>
        </nav>
    )
}
export default Nav