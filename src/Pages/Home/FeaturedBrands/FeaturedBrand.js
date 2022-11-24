import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBrand = ({ category }) => {
    const { _id, name, image } = category;

    return (
        <section>
            <div className="card bg-base-100 shadow-2xl rounded-none">
                <Link to={`/category/${_id}`}>
                    <figure><img className='h-64 object-cover w-full object-center' src={image} alt="laptop" /></figure>
                </Link>
                <div className="py-3">
                    <h2 className="text-xl font-bold text-center">
                        <Link to={`/category/${_id}`}>{name}</Link>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBrand;