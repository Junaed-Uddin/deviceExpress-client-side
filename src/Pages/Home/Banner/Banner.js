import React from 'react';
import laptop21 from '../../../assets/banner/laptop21.jpg';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';

const Banner = () => {

    return (
        <div className="mb-16 relative -z-10">
            <div className="h-full" style={{ backgroundImage: `url(${laptop21})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                <div className="px-4 flex flex-col justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20
                h-[580px]">
                    <div className="max-w-xl mb-5 sm:mb-10 items-center md:mx-auto text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-2xl mb-3 sm:mb-6 font-sans text-3xl font-bold leading-normal text-white sm:text-5xl md:mx-auto">
                            <span className="relative inline-block">
                            </span>
                            SELL YOUR LAPTOP FOR QUICK CASH
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            Sell your old device at the best price with exciting offers from Flipkart, Amazon, Paytm and lots more
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-0 justify-center items-center">
                        <button
                            className="inline-flex items-center justify-center h-12 px-6 sm:mr-6 font-medium tracking-wide bg-blue-500 text-white rounded-md"
                        >
                            Get started
                        </button>
                        <button
                            className="btn btn-outline inline-flex items-center font-semibold text-white h-12 px-6 rounded-md"
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative px-4 sm:px-0">
                <div className="absolute inset-0 bg-gray-100 h-1/2" />
                <div className="relative grid mx-auto overflow-hidden bg-white -z- divide-y rounded shadow-xl sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                            <FaShippingFast size={25}></FaShippingFast>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Free Shipping
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                            <MdOutlinePayments size={25}></MdOutlinePayments>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Fast Payment
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                            <AiOutlineSchedule size={25}></AiOutlineSchedule>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Schedule Pickup
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;