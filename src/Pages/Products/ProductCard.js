import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';

const ProductCard = ({ product, setProductInfo }) => {
    const { productName, image, original_price, resale_price, used_year, posted_time, seller_verified, location, description, purchaseYear, warrantee, sellers_name, mobile, condition, category_name } = product;

    return (
        <>
            <div className="card bg-white shadow-2xl rounded-sm h-full">
                <figure className='h-full'><img src={image} className='h-full w-full object-cover' alt="Shoes" /></figure>
                <div className="card-body">

                    <div className='flex justify-between items-center'>
                        <p className='text-2xl font-bold'>{productName}</p>
                        <div className="flex items-center gap-1">
                            <p className='text-blue-500'>{seller_verified ? <MdVerifiedUser></MdVerifiedUser> : ''}</p>
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

                    <div className="card-actions justify-between items-center mt-5">
                        <label onClick={() => setProductInfo(product)} htmlFor="booking-modal" className="btn border-none px-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded font-semibold">Purchase Now</label>
                        <div className='badge badge-secondary font-semibold'>{posted_time}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;