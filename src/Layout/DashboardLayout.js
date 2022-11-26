import React, { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ImUsers } from 'react-icons/im';
import { MdOutlineSell } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAdmin from '../hooks/useAdmin';
import { AuthProvider } from '../Contexts/AuthContext';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <div className='sm:flex items-start w-full'>
                <div className=" h-full w-full sm:h-screen p-3 space-y-2 sm:w-72 dark:bg-gray-900 dark:text-gray-100">
                    <div className="divide-y divide-gray-700">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

                            {
                                !isSeller && !isAdmin &&
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to='/dashboard/myOrders' className="flex items-center p-2 space-x-3 rounded-md">
                                        <p><BsCartCheck size={25}></BsCartCheck></p>
                                        <span className='text-base'>My Orders</span>
                                    </NavLink>
                                </li>
                            }

                            {
                                isSeller &&
                                <>
                                    <li>
                                        <NavLink to='/dashboard/addProducts' className="flex items-center p-2 space-x-3 rounded-md">
                                            <p><IoIosAddCircleOutline size={25}></IoIosAddCircleOutline></p>
                                            <span className='text-base'>Add Products</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/myProducts' className="flex items-center p-2 space-x-3 rounded-md">
                                            <p><GiShoppingBag size={25}></GiShoppingBag></p>
                                            <span className='text-base'>My Products</span>
                                        </NavLink>
                                    </li>
                                </>
                            }

                            {
                                isAdmin &&
                                <>
                                    <li>
                                        <NavLink to='/dashboard/allBuyers' className="flex items-center p-2 space-x-3 rounded-md">
                                            <p><ImUsers size={25}></ImUsers></p>
                                            <span className='text-base'>All Buyers</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allSellers' className="flex items-center p-2 space-x-3 rounded-md">
                                            <p><MdOutlineSell size={25}></MdOutlineSell></p>
                                            <span className='text-base'>All Sellers</span>
                                        </NavLink>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
                <div className='w-full mx-2 sm:mx-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;