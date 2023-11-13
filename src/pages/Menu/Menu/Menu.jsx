import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet><title>Bistro | Menu</title></Helmet>

            <Cover img={menuImg} title='Our Menu'></Cover>
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer">
            </SectionTitle>

            {/* offered Menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dissert menu items */}
            <MenuCategory
                items={desserts}
                title="desserts"
                img={dessertImg}
            >
            </MenuCategory>

            {/* Pizzza  */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            >
            </MenuCategory>

            {/* salad */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            >
            </MenuCategory>
            {/* Soup */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            >
            </MenuCategory>

        </div>
    );
};

export default Menu;