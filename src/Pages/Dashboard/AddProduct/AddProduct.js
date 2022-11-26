import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../Contexts/AuthContext';
import Loader from '../../../Components/Loader/Loader';

const AddProduct = () => {
    const { user } = useContext(AuthProvider);
    const [startDate, setStartDate] = useState(new Date());
    const [postDate, setPostDate] = useState(new Date());
    const imageKey = process.env.REACT_APP_SECRET_Key;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const purchaseDate = format(startDate, 'PP');
    const postedTime = format(postDate, 'PP');

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

    const handleProduct = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const productInfo = {
                        sellers_name: user?.displayName,
                        email: user?.email,
                        productName: data.name,
                        original_price: data.oPrice,
                        resale_price: data.rPrice,
                        condition: data.condition,
                        purchaseYear: purchaseDate,
                        mobile: data.mobile,
                        warrantee: data.warrantee,
                        used_year: data.used_year,
                        posted_time: postedTime,
                        location: data.location,
                        category_name: data.brand,
                        description: data.description,
                        image: imageData.data.url,
                        status: 'available'
                    }

                    console.log(productInfo);

                    fetch('http://localhost:5000/category', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("secretToken")}`
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success(data.message);
                            reset();

                        })
                }
            })
    }

    return (
        <div className='w-full my-7'>
            <h2 className='text-3xl font-semibold'>Add Products</h2>

            <form onSubmit={handleSubmit(handleProduct)} className='bg-gray-200 p-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5 w-full'>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Seller Name</span>
                    </label>
                    <input type="text" disabled defaultValue={user?.displayName} placeholder="Seller Name" {...register("seller_name")} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Product Name</span>
                    </label>
                    <input type="text" name='pName' placeholder="Product Name" {...register("name",
                        {
                            required: 'Enter your Name',
                            maxLength: { value: 20, message: `Name cannot exceed 20 characters long` }
                        }
                    )} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-500 text-start text-sm mt-2'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Brand</span>
                    </label>
                    <select name='brand' className="select select-bordered w-full col-span-full sm:col-span-1" {...register("brand")}>
                        {
                            categories.map(category => <option
                                key={category._id}

                            >{category.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Original Price</span>
                    </label>
                    <input type="text" name='oPrice' placeholder="Original Price" {...register("oPrice")} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Resale Price</span>
                    </label>
                    <input type="text" name='rPrice' placeholder="Resale Price" {...register("rPrice")} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Condition</span>
                    </label>
                    <select name='condition' className="select select-bordered w-full col-span-full sm:col-span-1" {...register("condition")}>
                        <option defaultValue>Excellent</option>
                        <option>Fair</option>
                        <option>Good</option>
                    </select>
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Used Year</span>
                    </label>
                    <select name='used_year' className="select select-bordered w-full col-span-full sm:col-span-1" {...register("used_year")}>
                        <option defaultValue>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Warranty</span>
                    </label>
                    <select name='warrantee' className="select select-bordered w-full col-span-full sm:col-span-1" {...register("warrantee")}>
                        <option defaultValue>Yes</option>
                        <option>No</option>
                    </select>
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Year of Purchase</span>
                    </label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" dateFormat="MMMM d, yyyy" />
                </div>

                <div className="form-control hidden w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Posted Time</span>
                    </label>
                    <DatePicker selected={postDate} onChange={(date) => setPostDate(date)} className="input input-bordered w-full" dateFormat="MMMM d, yyyy" />
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Mobile</span>
                    </label>
                    <input type="text" name='mobile' placeholder="Mobile" {...register("mobile")} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" {...register("location")} className="input input-bordered w-full" />
                </div>

                <div className="form-control col-span-full sm:col-span-1">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Image</span>
                    </label>
                    <div className='form-control col-span-full sm:col-span-2'>
                        <input type="file" name='image' {...register("img")} className="input input-bordered w-full py-2" />
                    </div>
                </div>

                <div className="form-control w-full col-span-full lg:col-span-4">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Description</span>
                    </label>
                    <textarea type="text" rows={5} name='description' placeholder="Description" {...register("description")} className="py-3 px-3 outline-none rounded-md" style={{ resize: 'none' }} />
                </div>

                <div className='lg:col-span-4 col-span-full flex justify-center'>
                    <button type='submit' className='btn bg-blue-500 border-none text-white'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;