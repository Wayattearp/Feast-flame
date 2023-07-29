import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Feast Flame</h1>
                    <h2>Fort Lee</h2>
                    <p>
                        We are a family owned European restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button className="reservation-button">Reserve a table</button>
                    </Link>
                </div>
                <img
                    className="hero-image"
                    src={restaurantFoodImage}
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
};

export default Hero;
