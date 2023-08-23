import SeaBreezeSalad from '../Home/assets/SeaBreezeSalad.png'
import TuscanHerbCrustedSalmon from '../Home/assets/TuscanHerbCrustedSalmon.png';
import GrandMarnierFlambeédOranges from '../Home/assets/GrandMarnierFlambeédOranges.png';
import RoastedBeetandQuinoaSalad from '../Home/assets/RoastedBeetandQuinoaSalad.png';
import StuffedPorkLoinwithAppleChutney from '../Home/assets/StuffedPorkLoinwithAppleChutney.png';
import ChocolateMoltenLavaCake from '../Home/assets/ChocolateMoltenLavaCake.png';
import './Menu.css';
import MealItem from './MenuItem';

const meals = [
    {
        name: 'Roasted Beet and Quinoa Salad',
        image: RoastedBeetandQuinoaSalad,
        price: '$14.00',
        description: `Embark on a journey of taste and texture with our Roasted Beet and Quinoa Salad. Earthy roasted beets, protein-packed quinoa, and crunchy walnuts create a satisfying contrast, while fresh orange segments add a burst of citrus. Tossed in a light citrus vinaigrette and garnished with crumbled goat cheese, this salad is both nourishing and flavorful.
    
    `,
    },
    {
        name: 'Sea Breeze Salad',
        image: SeaBreezeSalad,
        price: '$15.00',
        description: `A refreshing salad inspired by the Mediterranean coastline,
     featuring a delightful mix of crisp mixed greens, juicy cherry tomatoes, tangy Kalamata olives, creamy feta cheese, and a sprinkling of toasted pine nuts. Drizzled with a zesty lemon-oregano vinaigrette, this salad captures the essence of a cool sea breeze on a warm summer day.`,
    },
    {
        name: 'Stuffed Pork Loin with Apple Chutney',
        image: StuffedPorkLoinwithAppleChutney,
        price: '$32.00',
        description: `Discover a rustic yet refined dining experience with our Stuffed Pork Loin with Apple Chutney. Succulent pork loin is stuffed with a savory blend of wild rice, herbs, and cranberries, then roasted to perfection. Paired with a tangy apple chutney and served with sautéed green beans, this dish is a comforting celebration of harvest flavors.`,
    },
    {
        name: 'Chocolate Molten Lava Cake',
        image: ChocolateMoltenLavaCake,
        price: '$12.00',
        description: `Indulge in the ultimate chocolate fantasy with our Chocolate Molten Lava Cake. A rich chocolate cake exterior gives way to a flowing center of molten chocolate that's pure bliss for the chocolate lover. Accompanied by a scoop of creamy vanilla ice cream and a dusting of powdered sugar, this dessert is both a visual and culinary delight, promising a perfect ending to an unforgettable meal.`,
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

function Menu() {
    return (
        <section className="container menu">
            <div className="menu-header">
                <h2>Experience the culinary indulgence!</h2>
            </div>
            {meals.map((meal, index) =>
                <MealItem key={index} meal={meal} />
            )}
        </section>
    );
};

export default Menu;
