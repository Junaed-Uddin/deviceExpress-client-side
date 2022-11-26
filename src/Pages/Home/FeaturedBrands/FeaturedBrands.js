import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader/Loader';
import FeaturedBrand from './FeaturedBrand';

const FeaturedBrands = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data.data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mb-10'>
            <h2 className='text-4xl font-semibold text-center mt-16 mb-8'>Featured Brands</h2>
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