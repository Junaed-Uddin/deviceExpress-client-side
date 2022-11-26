import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { AuthProvider } from '../../../Contexts/AuthContext';
import OrderData from './OrderData';

const MyOrders = () => {
    const { user } = useContext(AuthProvider);
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    authorization:`bearer ${localStorage.getItem('secretToken')}`
                }
            });
            const data = await res.json();
            return data.data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='my-7'>
            <h2 className='text-3xl font-semibold'>Total Orders: {orders.length}</h2>

            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-sm'>Product Image</th>
                            <th className='text-sm'>Product Name</th>
                            <th className='text-sm'>Price</th>
                            <th className='text-sm'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderData
                                key={order._id}
                                order={order}
                            ></OrderData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;