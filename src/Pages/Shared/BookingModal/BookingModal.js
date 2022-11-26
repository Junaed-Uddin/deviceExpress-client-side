import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../Contexts/AuthContext';

const BookingModal = ({ productInfo, setProductInfo }) => {
    const { user } = useContext(AuthProvider);
    const { category_name, productName, image, resale_price } = productInfo;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const bookingOrder = {
            brand: category_name,
            productName: productName,
            resalePrice: resale_price,
            image,
            name: user?.displayName,
            email: user?.email,
            phone: form.phone.value,
            location: form.location.value
        }

        console.log(bookingOrder);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("secretToken")}`
            },
            body: JSON.stringify(bookingOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    setProductInfo(null);
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">Brand: {category_name}</h3>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="category" className='w-24'>Product: </label>
                            <input name='category' disabled defaultValue={productName} type="text" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="price" className='w-24'>Price: </label>
                            <input name='price' disabled defaultValue={resale_price} type="text" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="fullName" className='w-24'>Name: </label>
                            <input name='fullName' disabled defaultValue={user?.displayName} type="text" placeholder="Full Name" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="email" className='w-24'>Email: </label>
                            <input name='email' disabled defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="phone" className='w-24'>Phone: </label>
                            <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <div className='flex items-center gap-3 w-full'>
                            <label htmlFor="location" className='w-24'>Location: </label>
                            <input name='location' type="text" placeholder="location" className="input input-bordered input-black w-full my-2" />
                        </div>

                        <input type="submit" className="btn hover:bg-violet-500 border-none bg-violet-500 text-white rounded w-full my-2" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;