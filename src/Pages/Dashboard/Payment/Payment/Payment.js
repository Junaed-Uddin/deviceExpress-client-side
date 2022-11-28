import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../../Components/Loader/Loader';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookingData = useLoaderData();
    const { brand, productName, image, warrantee, resalePrice, name } = bookingData.data;
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    return (
        <div className='my-7'>
            <h2 className='text-3xl font-semibold'>Payment</h2>
            <div className='lg:flex mt-5 gap-5 w-11/12'>
                <div className="card w-3/4 bg-white shadow-xl">
                    <figure><img className='h-44 w-48' src={image} alt="productImage" /></figure>
                    <div className="card-body p-5">
                        <div className='flex justify-between flex-wrap items-center'>
                            <h2 className="card-title">
                                {productName}
                            </h2>
                            <div className="badge badge-secondary flex-shrink-0 mt-3 sm:mt-0 font-semibold">Brand: {brand}</div>
                        </div>
                        <p className='my-2'>Buyer Name: {name}</p>
                        <div className="card-actions flex justify-between">
                            <p className="">Warrantee: {warrantee}</p>
                            <div className="font-semibold">Price: {resalePrice} BDT</div>
                        </div>
                    </div>
                </div>

                <div className='card w-full p-10 mt-5 lg:mt-0 bg-white shadow-xl'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            bookingData={bookingData}
                        />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;