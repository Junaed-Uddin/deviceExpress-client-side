import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OrderData from './OrderData';

const MyOrders = () => {
    const { data: orders = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myOrders');
            const data = await res.json();
            return data.data;
        }
    })
    return (
        <div className='my-7'>
            <h2 className='text-3xl font-semibold'>Total Orders: {orders.length}</h2>

            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-base'>Product Image</th>
                            <th className='text-base'>Product Name</th>
                            <th className='text-base'>Price</th>
                            <th className='text-base'>Payment</th>
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