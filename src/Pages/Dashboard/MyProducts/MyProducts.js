import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { AuthProvider } from '../../../Contexts/AuthContext';
import ProductData from './ProductData';

const MyProducts = () => {
    const { user } = useContext(AuthProvider);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("secretToken")}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data.data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='my-7'>
            <h2 className='text-3xl font-semibold'>My Products: {products.length}</h2>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-sm'>Name</th>
                            <th className='text-sm'>Posted Date</th>
                            <th className='text-sm'>Price</th>
                            <th className='text-sm'>Status</th>
                            <th className='text-sm'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ProductData
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            ></ProductData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;