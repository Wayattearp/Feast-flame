import Flame from './Flame';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <Flame />
                <h1> Feast Flame</h1>
            </Link>
        </header>
    )
}
export default Header