import Flame from './Flame';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Flame/>
            <h2> <Link to="/">Feast Flame</Link></h2>
        </header>
    )
}
export default  Header