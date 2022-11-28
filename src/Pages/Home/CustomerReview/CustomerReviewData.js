import React from 'react';

const CustomerReviewData = ({ userReview }) => {
    const { customerName, image, message, profession } = userReview;

    return (
        <div className="card bg-white rounded-lg shadow-2xl w-full">
            <div className="px-4 py-12 h-full rounded-t-lg w-full sm:px-8 md:px-12 dark:bg-white">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>{message}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-500 dark:text-gray-900 h-full">
                <img src={image} alt="user" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                <p className="text-xl font-semibold leading-tight text-white">{customerName}</p>
                <p className="text-sm uppercase text-white">{profession}</p>
            </div>
        </div>
    );
};

export default CustomerReviewData;