import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

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
    }


    return (
        <div className='my-8'>
            <h2 className='text-3xl font-semibold'>Reported Items: {reportedItems.length}</h2>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-sm'>Image</th>
                            <th className='text-sm'>Name</th>
                            <th className='text-sm'>Price</th>
                            <th className='text-sm'>Warrantee</th>
                            <th className='text-sm'>Condition</th>
                            <th className='text-sm'>Status</th>
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
                                <td><div>
                                    <div className="font-bold">{reportItem.productName}</div>
                                    <div className="text-sm opacity-50">{reportItem.category_name}</div>
                                </div></td>
                                <td>{reportItem.resale_price} BDT</td>
                                <td>{reportItem.warrantee}</td>
                                <td>{reportItem.condition}</td>
                                <td>{reportItem.status}</td>
                                <th>
                                    <button onClick={() => handleDelete(reportItem._id)} className="btn bg-red-500 text-white rounded-sm btn-sm border-none">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;