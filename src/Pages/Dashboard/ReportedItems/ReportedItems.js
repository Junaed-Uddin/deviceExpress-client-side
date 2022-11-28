import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ReportedItems = () => {

    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reportItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reportItems`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('secretToken')}`
                }
            });
            const data = await res.json();
            return data.data;
        }
    })

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
                
                fetch(`http://localhost:5000/reportedItem/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('secretToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
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
            <h2 className='text-3xl font-semibold'>Reported Items: {reportedItems.length}</h2>
            {reportedItems.length > 0 &&
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-sm'>Image</th>
                                <th className='text-sm'>Reporter Name</th>
                                <th className='text-sm'>Product Name</th>
                                <th className='text-sm'>Price</th>
                                <th className='text-sm'>Warrantee</th>
                                <th className='text-sm'>Condition</th>
                                <th className='text-sm'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportedItems.map(reportItem => <tr key={reportItem._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={reportItem.image} alt='productImage' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{reportItem.reporterName}</td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{reportItem.productName}</div>
                                            <div className="text-sm opacity-50">{reportItem.category_name}</div>
                                        </div>
                                    </td>

                                    <td>{reportItem.resale_price} BDT</td>
                                    <td>{reportItem.warrantee}</td>
                                    <td>{reportItem.condition}</td>
                                    <td>
                                        <button onClick={() => handleDelete(reportItem._id)} className="btn bg-red-500 text-white rounded-sm btn-sm border-none">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ReportedItems;