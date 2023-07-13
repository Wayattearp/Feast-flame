import Flame from './Flame';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <Flame />
                <h2> Feast Flame</h2>
            </Link>
        </header>
    )
}
export default Header