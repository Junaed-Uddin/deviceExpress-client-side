import { Tooltip } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/AuthContext';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import laptop from '../../../assets/logo/laptop.png';
import userImg from '../../../assets/user/userImg.jpg';


const Navbar = () => {
    const { user, logOut } = useContext(AuthProvider);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItem = <React.Fragment>
        <li>
            <NavLink to="/" className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                Contact
            </NavLink>
        </li>

        {
            user?.uid ?
                <>
                    {
                        !isAdmin && !isSeller ?
                            <li>
                                <NavLink to='/dashboard/myOrders' className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                                    Dashboard
                                </NavLink>
                            </li>
                            :
                            <li>
                                <NavLink to={`/dashboard/${isAdmin ? 'allBuyers' : 'addProducts'}`} className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                                    Dashboard
                                </NavLink>
                            </li>
                    }

                    <div className='flex items-center gap-4 sm:px-2'>
                        <li>
                            <NavLink>
                                <Tooltip className='text-amber-500 font-bold ' content={user?.displayName ? user?.displayName : "Anonymous"} placement="bottom">
                                    <img className='rounded-full' style={{ height: '4   8px', width: '50px' }} src={user?.photoURL ? user.photoURL : userImg} referrerPolicy='no-referrer' alt="" />
                                </Tooltip>
                            </NavLink>
                        </li>

                        <li>
                            <Link onClick={handleLogOut} className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                                Logout
                            </Link>
                        </li>

                    </div>
                </>
                :
                <li>
                    <NavLink to="/login" className={`font-medium tracking-wide text-white ${({ isActive }) => isActive ? 'active' : undefined}`}>
                        Login
                    </NavLink>
                </li>
        }

    </React.Fragment>

    return (
        <div className="bg-gray-800 shadow-2xl">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center">
                        <div className="flex items-center justify-center hidden sm:flex w-12 h-12 rounded-full dark:bg-white">
                            <img src={laptop} alt="logo" />
                        </div>
                        <span className="ml-2 text-2xl font-bold tracking-wide text-violet-500">
                            DeviceExpress
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 my-3 lg:flex">
                        {menuItem}
                    </ul>

                    <div className="lg:hidden mx-3">
                        <button className="my-3 -mr-1 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>

                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-gray-900 rounded border w-full shadow-sm">
                                    <div className="flex items-center justify-end mb-4">
                                        <div>
                                            <button className="p-2 -mt-2 -mr-2 rounded bg-gray-100"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className='flex justify-center'>
                                        <ul className="space-y-4 text-center mb-2
                                        ">
                                            {menuItem}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;