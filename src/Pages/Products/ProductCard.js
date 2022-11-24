import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import BookingModal from '../Shared/BookingModal/BookingModal';

const ProductCard = ({ product }) => {
    const { name, image, original_price, resale_price, used_years, posted_time, seller_verified, location, description, sellers_name } = product;

    return (
        <>
            <div className="card bg-white shadow-2xl rounded-sm">
                <figure className='h-full'><img src={image} className='h-full pt-4 w-full object-cover' alt="Shoes" /></figure>
                <div className="card-body h-full">
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="flex items-center gap-1">
                            <p className='text-blue-500'>{seller_verified ? <MdVerifiedUser></MdVerifiedUser> : ''}</p>
                            <p className='text-lg'>{sellers_name}</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className='text-sm'>{description}</p>
                    </div>
                    <ul className='list-disc pl-5 space-y-4 mt-3'>
                        <li className="text-sm text-gray-700">Original Price: {original_price} BDT</li>
                        <li className='text-sm text-gray-700'>Used: {used_years} yr</li>
                        <li className='text-sm text-gray-700'>Resale Price: {resale_price} BDT</li>
                        <li className='text-sm text-gray-700'>Location: {location} BDT</li>
                    </ul>
                    <div className="card-actions justify-between items-center mt-5">
                        <label htmlFor="booking-modal" className="btn border-none px-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded font-semibold">Purchase Now</label>
                        <div className='badge badge-secondary font-semibold'>{posted_time}</div>
                    </div>
                    <BookingModal>
                        
                    </BookingModal>
                </div>
            </div>
        </>
    );
};

export default ProductCard;