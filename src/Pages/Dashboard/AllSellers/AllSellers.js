import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader/Loader';

const AllSellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users/buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem("secretToken")}`
                }
            });
            const data = await res.json();
            return data.data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleSellerDelete = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('secretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    const handleVerified = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem("secretToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className='my-8'>
            <h2 className='text-3xl font-semibold'>All Sellers: {sellers.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-sm'>Serial</th>
                            <th className='text-sm'>Name</th>
                            <th className='text-sm'>Email</th>
                            <th className='text-sm'>Verify</th>
                            <th className='text-sm'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleVerified(seller._id)} className='btn rounded-sm bg-blue-500 hover:bg-blue-500 border-none text-white btn-sm'>Verify</button></td>
                                <td><button onClick={() => handleSellerDelete(seller._id)} className='btn rounded-sm bg-red-500 hover:bg-red-500 border-none text-white btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;