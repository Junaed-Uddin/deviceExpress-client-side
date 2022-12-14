import React from 'react';
import AdvertisementData from './AdvertisementData';

const AdvertiseProduct = ({ advertiseProducts }) => {

    return (
        <div className='mt-28 mb-12'>
            <h2 className='text-4xl font-semibold text-center'>Advertised Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-3/4 mx-5 sm:mx-auto gap-5 my-8' data-aos="fade-up" data-aos-duration="800">
                {
                    advertiseProducts.map(product => <AdvertisementData
                        key={product._id}
                        product={product}
                    ></AdvertisementData>)
                }
            </div>
        </div>
    );
};

export default AdvertiseProduct;