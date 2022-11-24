import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeaturedBrand from './FeaturedBrand';

const FeaturedBrands = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            console.log(data);
            return data.data;
        }
    })
    return (
        <div className='mb-10'>
            <h2 className='text-4xl font-semibold text-center my-10'>Featured Brands</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-3/4 mx-5 sm:mx-auto gap-5'>
                {
                    categories.map(category => <FeaturedBrand
                        key={category._id}
                        category={category}
                    ></FeaturedBrand>)
                }
            </div>
        </div>
    );
};

export default FeaturedBrands;