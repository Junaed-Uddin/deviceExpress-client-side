import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ProductData = ({ product, refetch }) => {
    const { _id, image, productName, display, resale_price, posted_time, category_name, status } = product;


    const handleAdvertisement = id => {

        if (display === 'advertise') {
            return toast.error('Already Advertised');
        }

        fetch(`https://device-express-server.vercel.app/productAdvertise/${id}`, {
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
                    toast.error(data.message)
                }
            })
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
                fetch(`https://device-express-server.vercel.app/soldProduct/${id}`, {
                    method: 'DELETE',
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

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <img src={image} alt="productImage" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Name: {productName}</div>
                        <div className="text-sm opacity-50">Brand: {category_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {posted_time}
            </td>
            <td>{resale_price}</td>
            <td>{status}</td>
            <th>
                {
                    status === 'available' ?
                        <button onClick={() => handleAdvertisement(_id)} className={`btn btn-sm w-28 border-none rounded-sm text-white ${display === 'advertise' ? 'bg-green-500 hover:bg-green-500' : 'bg-blue-500 hover:bg-blue-500'} `}>{`${display === 'advertise' ? 'Advertised' : 'Advertise'}`}</button>
                        :
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm w-28 border-none rounded-sm text-white bg-red-500">Delete</button>
                }
            </th>
        </tr>
    );
};

export default ProductData;