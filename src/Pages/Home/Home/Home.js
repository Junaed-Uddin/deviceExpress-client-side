import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import Partners from '../Partners/Partners';

const Home = () => {
    const { data: advertiseProducts = [] } = useQuery({
        queryKey: ['product/advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product/advertise');
            const data = await res.json();
            return data.data;
        }
    })

    return (
        <div>
            <Banner></Banner>
            <FeaturedBrands></FeaturedBrands>
            {advertiseProducts.length && <AdvertiseProduct
                advertiseProducts={advertiseProducts}
            ></AdvertiseProduct>}
            <CustomerReview></CustomerReview>
            <Partners></Partners>
        </div>
    );
};

export default Home;