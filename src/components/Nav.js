import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/booking">ABOUT</Link>
            <Link to="/booking">MENU</Link>
            <Link to="/booking">FIND US</Link>
        </nav>
    )
}
export default Nav