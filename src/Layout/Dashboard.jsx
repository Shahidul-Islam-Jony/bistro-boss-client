import { FaAd, FaBars, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><FaAd></FaAd>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'><FaList></FaList>My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><FaBars></FaBars>Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">    {/*flex-grow othoba flex-1 dile baki with tuku full nibe*/}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;