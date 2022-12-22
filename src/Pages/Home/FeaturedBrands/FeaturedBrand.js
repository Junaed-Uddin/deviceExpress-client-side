import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBrand = ({ category }) => {
    const { name, image } = category;

    return (
        <section data-aos="fade-up" data-aos-duration="1500">
            <div className="card bg-white shadow-2xl rounded-lg" >
                <Link to={`/category/${name}`}>
                    <figure><img className='h-60 w-64' src={image} alt="laptop" /></figure>
                </Link>
                <div className="py-3 bg-gray-100">
                    <h2 className="text-xl font-bold text-center">
                        <Link to={`/category/${name}`}>{name}</Link>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBrand;