import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/under-construction">MENU</Link>
            <a href="https://www.linkedin.com/in/anton-miles-05443a1a4/" target="_blank">FIND US</a>
            <Link to="/booking">RESERVATIONS</Link>
            <Link to="/under-construction">ORDER ONLINE</Link>
            <a href="https://github.com/Wayattearp/feast-flame/" target="_blank">ABOUT</a>
        </nav>
    )
}
export default Nav