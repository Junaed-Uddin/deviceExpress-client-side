import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { SiAmazonpay } from 'react-icons/si';

const CheckOutForm = ({ bookingData }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { resalePrice, name, email, productName, productId, brand, _id } = bookingData.data;


    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch("https://device-express-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("secretToken")}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)

        } else {
            setCardError('');
        }


        setSuccess('');
        setProcessing(true);
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                price: resalePrice,
                name,
                email,
                productName,
                brand,
                productId,
                transactionId: paymentIntent.id,
                bookingId: _id
            }

            // payment info stored the database
            fetch('https://device-express-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("secretToken")}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        setTransactionId(paymentIntent.id);
                        setSuccess('Congrats, You have successfully completed your Payment');
                        toast.success(data.message);
                    }
                })
        }
        setProcessing(false);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className='mb-10 text-2xl font-bold'>Billing Information</h2>
                <CardElement
                    options={{
                        style: {
                            base: {
                                color: "#32325d",
                                fontFamily: 'Arial, sans-serif',
                                fontSmoothing: "antialiased",
                                border: "1px solid black",
                                fontSize: "18px",
                                "::placeholder": {
                                    color: "#32325d"
                                }
                            },
                            invalid: {
                                fontFamily: 'Arial, sans-serif',
                                color: "#fa755a",
                                iconColor: "#fa755a"
                            }
                        },
                    }}
                />
                <div className='mt-7'>
                    <button className='btn btn-sm h-10 rounded w-full border-none px-3 text-white bg-gray-800 flex gap-2 items-center text-base' type="submit" disabled={!stripe || !clientSecret || processing}>
                        <SiAmazonpay size={25} className='text-amber-500 font-bold'></SiAmazonpay><span>Pay Now</span>
                    </button>
                </div>
            </form>
            <p className='text-red-400'>{cardError}</p>
            <div className='mt-5'>
                {
                    success && <div className='text-lg text-center mt-3'>
                        <p className='text-green-500 font-semibold'>{success}</p>
                        <p>Your TransactionID: <span>{transactionId}</span></p>
                    </div>
                }
            </div>
        </>
    );
};

export default CheckOutForm;