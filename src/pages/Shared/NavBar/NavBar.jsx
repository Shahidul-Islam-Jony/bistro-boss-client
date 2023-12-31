import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <div className="flex flex-row items-center">
        <NavLink to='/' className='mr-4 text-xl'>Home</NavLink>
        <NavLink to='/menu' className='mr-4 text-xl'>Menu</NavLink>
        <NavLink to='/order/salad' className='mr-4 text-xl'>Order Food</NavLink>
        {
            user ? isAdmin ? <NavLink to='/dashboard/adminHome' className='mr-4 text-xl'>Dashboard</NavLink> : <NavLink to='/secret' className='mr-4 text-xl'>Secret</NavLink> : ''
        }
        <Link to='/dashboard/cart'>
            <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link>

        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
            </> :
                <><NavLink to='/login' className='mr-4 text-xl'>Login</NavLink></>
        }

    </div>

    return (
        <>
            <div className="navbar fixed  z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;