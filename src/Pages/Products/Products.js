import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {
    const productsData = useLoaderData();

    return (
        <section className='mx-14 my-10'>
            <div className='flex items-center'>
                <p className='text-2xl font-semibold'>Total Laptop Found: {productsData.data.length}</p>
            </div>
            <div className='my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    productsData.data.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Products;