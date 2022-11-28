import React from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-2 sm:px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-900">
                <div className="flex flex-col bg-blue-700 p-8 sm:p-14 text-white">
                    <div className="space-y-5">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Get in Touch</h2>
                        <div className="">
                            <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                        </div>
                    </div>
                    <div className='my-10'>
                        <p className='flex items-center gap-2'><BsTelephoneForward></BsTelephoneForward><span>+1(308) 321321</span></p>
                        <p className='flex items-center gap-2 mt-2'><AiTwotoneMail></AiTwotoneMail><span>alipress.int@gmail.com</span></p>
                    </div>
                    <div>
                        <p>545, Street 11, Block F Dean Boulevard, New York, USA </p>
                    </div>
                </div>
                <form className="space-y-6 bg-white py-7 px-4 sm:p-10 w-full">
                    <div>
                        <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
                        <input id="name" type="text" placeholder="" className="w-full border-2 border-gray-400 p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <input id="email" type="email" className="w-full border-2 border-gray-400 p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-semibold">Message</label>
                        <textarea id="message" rows="3" className="w-full border-2 border-gray-400 p-3 rounded dark:bg-gray-100" style={{resize:'none'}}></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-semibold font-bold tracking-wide uppercase rounded dark:bg-blue-700 dark:text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;