import React from 'react';

const OrderData = ({ order }) => {
    const { image, productName, resalePrice } = order;

    return (
        <tr>
            <th></th>
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
                {resalePrice}
            </td>
            <td>
                {order.resalePrice && !order.paid ? <button className="btn bg-red-500 text-white border-none">Pay</button> :
                    <span className='px-3 py-2 text-white bg-green-400 rounded border-none'>Paid</span>
                }
            </td>
        </tr >
    );
};

export default OrderData;