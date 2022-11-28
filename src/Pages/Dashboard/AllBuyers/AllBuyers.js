import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../../../Components/Loader/Loader';

const AllBuyers = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['users/buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer', {
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

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you want to delete this?',
            text: "It can't be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/buyerDelete/${id}`, {
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

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }


    return (
        <div className='my-8'>
            <h2 className='text-3xl font-semibold'>All buyers: {buyers.length}</h2>
            {buyers.length > 0 &&
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-sm'>Serial</th>
                                <th className='text-sm'>Name</th>
                                <th className='text-sm'>Email</th>
                                <th className='text-sm'>Role</th>
                                <th className='text-sm'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><span className='bg-amber-400 rounded-md px-2 text-sm py-1 font-semibold'>{buyer.role}</span></td>
                                    <td><button onClick={() => handleDelete(buyer._id)} className='btn rounded-sm bg-red-500 hover:bg-red-500 border-none text-white btn-sm'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllBuyers;