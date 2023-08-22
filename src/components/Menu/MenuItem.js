import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItem.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ meal }) => {
    return (
        <article className="menuitem">
            <div className="menuitem-image">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="menuitem-header">
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className="menuitem-body-footer">
                <p>{meal.description}</p>
                <div className='order'>
                    <Link to="/under-construction">
                        Order a delivery
                        <FontAwesomeIcon icon={faTruck} color='#862b0deb' />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default MenuItem;
