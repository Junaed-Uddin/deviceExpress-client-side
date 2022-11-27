import React from 'react';
import { Link } from 'react-router-dom';

const OrderData = ({ order }) => {
    const { _id, image, name, warrantee, productName, resalePrice } = order;

    return (
        <tr>
            <th></th>
            <td>
                {name}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-28">
                            <img className='w-20 h-20 object-cover' src={image} alt="laptop" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <p className="font-bold">{productName}</p>
                </div>
            </td>
            <td>
                {warrantee}
            </td>
            <td>
                {resalePrice}
            </td>
            <td>
                {order.resalePrice && !order.paid ? <Link to={`/dashboard/payment/${_id}`}><button className="btn bg-red-500 text-white border-none">Pay</button></Link> :
                    <span className='px-3 py-2 text-white bg-green-400 rounded border-none'>Paid</span>
                }
            </td>
        </tr >
    );
};

export default OrderData;