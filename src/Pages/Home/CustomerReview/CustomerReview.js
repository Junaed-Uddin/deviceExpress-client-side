import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CustomerReviewData from './CustomerReviewData';

const CustomerReview = () => {

    const { data: userReviews = [] } = useQuery({
        queryKey: ['userReviews'],
        queryFn: async () => {
            const res = await fetch('https://device-express-server.vercel.app/userReviews');
            const data = await res.json();
            return data.data;
        }
    })

    return (
        <section className="mt-28 dark:bg-gray-100 dark:text-gray-800">
            <h1 className="text-4xl font-semibold text-center mb-12'>Featured Brands">Customer's Review</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-3/4 mx-5 sm:mx-auto gap-5 mt-10">
                {
                    userReviews.map(userReview => <CustomerReviewData
                        key={userReview._id}
                        userReview={userReview}
                    ></CustomerReviewData>)
                }
            </div>
        </section>
    );
};

export default CustomerReview;