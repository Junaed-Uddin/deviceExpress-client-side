import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { MdVerifiedUser } from 'react-icons/md';
import { AuthProvider } from '../../Contexts/AuthContext';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const ProductCard = ({ product, setProductInfo }) => {
    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const { _id, productName, image, original_price, resale_price, used_year, posted_time, verified, location, description, purchaseYear, warrantee, sellers_name, mobile, reported, condition, category_name } = product;

    const handleReportProduct = () => {
        const reportedItems = {
            productId: _id,
            reporterName: user?.displayName,
            productName,
            image,
            warrantee,
            condition,
            resale_price,
            category_name,
        }

        if (reported === 'yes') {
            return toast.error('Already reported')
        }

        fetch('http://localhost:5000/reportItems', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("secretToken")}`
            },
            body: JSON.stringify(reportedItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message)
                }
                else {
                    toast.error(data.error);
                }
            })
    }


    return (
        <>
            <div className="card bg-white shadow-2xl rounded-lg h-full">
                <figure className='h-full'><img src={image} className='h-72 w-72' alt="productImage" /></figure>
                <div className="card-body">

                    <div className='flex flex-wrap gap-3 xl:gap-0 justify-between items-center'>
                        <p className='text-2xl font-bold'>{productName}</p>
                        <div className="flex items-center gap-1">
                            <p className='text-blue-500'>{verified === 'yes' ? <MdVerifiedUser></MdVerifiedUser> : ''}</p>
                            <p className='text-base font-semibold'>Seller: {sellers_name}</p>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <p className='text-sm'>{description}</p>
                    </div>

                    <ul className='list-disc pl-5 space-y-4 mt-3'>
                        <li className="text-sm text-gray-700">Brand Name: {category_name}</li>
                        <li className='text-sm text-gray-700'>Resale Price: {resale_price} BDT</li>
                        <li className="text-sm text-gray-700">Original Price: {original_price} BDT</li>
                        <li className='text-sm text-gray-700'>Used Year: {used_year} yr</li>
                        <li className='text-sm text-gray-700'>Condition: {condition}</li>
                        <li className='text-sm text-gray-700'>Warrantee: {warrantee}</li>
                        <li className='text-sm text-gray-700'>Purchase Year: {purchaseYear}</li>
                        <li className='text-sm text-gray-700'>Location: {location}</li>
                        <li className='text-sm text-gray-700'>Mobile: {mobile}</li>
                    </ul>

                    <div className="flex flex-wrap flex-col xl:flex-row gap-3 justify-between items-center mt-5">

                        <label onClick={() => setProductInfo(product)} disabled={isAdmin || isSeller} htmlFor="booking-modal" className="btn border-none px-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded font-semibold w-full xl:w-[150px]">Book Now</label>


                        <div className='flex xl:flex-col gap-4 xl:gap-0 xl:items-end'>
                            <span className='badge mb-2 badge-secondary h-6 rounded-sm font-semibold'>{posted_time}</span>
                            {reported !== 'yes' ?
                                <button onClick={handleReportProduct} className='btn btn-xs border-none bg-blue-500 text-white text-sm w-[70px] rounded-sm'>Report</button>
                                :
                                <button onClick={handleReportProduct} className='border-none bg-red-500 text-white text-sm px-2 py-1 rounded-sm'>Reported</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;