import Flame from './Flame';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import './Header.css';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header>
            <Link to="/feast-flame">
                <Flame />
                <h1> Feast Flame</h1>
            </Link>

            <button
                className="nav-bar-hamburger"
                type="button"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                {isNavExpanded ?
                    <FontAwesomeIcon icon={faXmark} size="2x" /> :
                    <FontAwesomeIcon icon={faBars} size="2x" />}
            </button>
            <ul
                className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                 <Nav />   
            </ul>
        </header>
    )
}
export default Header