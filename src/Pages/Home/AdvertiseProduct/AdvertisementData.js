import React from 'react';

const AdvertisementData = ({ product }) => {
    const { image, productName, resale_price, description, status, used_year, warrantee } = product;

    return (
        <div className="card rounded-lg shadow-2xl" data-aos="fade-up" data-aos-duration="800">
            <figure><img className='h-72 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">
                        {productName}
                    </h2>
                    <div className="badge badge-secondary">{status}</div>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end mt-5">
                    <div className="badge badge-outline">Price: {resale_price} BDT</div>
                    <div className="badge badge-outline">Warrantee: {warrantee}</div>
                    <div className="badge badge-outline">Used: {used_year}yr</div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementData;