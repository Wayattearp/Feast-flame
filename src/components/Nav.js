import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <a href="https://www.linkedin.com/" target="_blank">FIND US</a>
            <Link to="/booking">RESERVATIONS</Link>
            <Link to="/under-construction">MENU</Link>
            <Link to="/under-construction">ORDER ONLINE</Link>
            <Link to="/feast-flame">ABOUT</Link>
        </nav>
    )
}
export default Nav