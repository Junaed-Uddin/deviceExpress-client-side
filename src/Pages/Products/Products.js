import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import BookingModal from '../Shared/BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const productsData = useLoaderData();
    const [productInfo, setProductInfo] = useState({});
    const navigation = useNavigation();
    
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    return (
        <section className='mx-2 sm:mx-14 my-10'>
            <div className='flex items-center'>
                <p className='text-2xl font-semibold'>Total Laptop Found: {productsData.data.length}</p>
            </div>
            <div className='my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    productsData.data.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProductInfo={setProductInfo}
                    ></ProductCard>)
                }
            </div>
            {productInfo && <BookingModal
                productInfo={productInfo}
                setProductInfo={setProductInfo}
            ></BookingModal>}
        </section>
    );
};

export default Products;