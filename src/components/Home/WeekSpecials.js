import { Link } from 'react-router-dom';
import SeaBreezeSalad from './assets/SeaBreezeSalad.png';
import TuscanHerbCrustedSalmon from './assets/TuscanHerbCrustedSalmon.png';
import GrandMarnierFlambeédOranges from './assets/GrandMarnierFlambeédOranges.png';
import './WeekSpecials.css';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Sea Breeze Salad',
    image: SeaBreezeSalad,
    price: '$15.00',
    description: `A refreshing salad inspired by the Mediterranean coastline,
     featuring a delightful mix of crisp mixed greens, juicy cherry tomatoes, tangy Kalamata olives, creamy feta cheese, and a sprinkling of toasted pine nuts. Drizzled with a zesty lemon-oregano vinaigrette, this salad captures the essence of a cool sea breeze on a warm summer day.`,
  },
  {
    name: 'Tuscan Herb-Crusted Salmon',
    image: TuscanHerbCrustedSalmon,
    price: '$35.00',
    description: `Immerse yourself in the flavors of Tuscany with our signature herb-crusted salmon. A succulent fillet of salmon is perfectly seared to create a golden crust that locks in the fish's natural juiciness. Served with a side of roasted seasonal vegetables,
     this dish is a true celebration of European culinary excellence.`,
  },
  {
    name: 'Grand Marnier Flambeéd Oranges',
    image: GrandMarnierFlambeédOranges,
    price: '$18.00',
    description: `Juicy orange segments gently sautéed in luscious Grand Marnier-infused syrup, skillfully flambéed to release captivating liqueur aroma. Served warm with a dollop of vanilla bean ice cream for a delightful balance of sweet and citrusy flavors, this dessert leaves a lasting impression on your palate.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>Weekly specials!</h2>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
