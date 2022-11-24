import React from 'react';
import laptop1 from '../../../assets/banner/laptop1.jpg';
import laptop2 from '../../../assets/banner/laptop2.jpg';
import laptop3 from '../../../assets/banner/laptop3.jpg';

const Banner = () => {
    const imageSlider = [
        {
            id: 1,
            image: laptop1,
            title: 'Sell your used laptop for quick cash',
            blog: 'Select your device below to get the best offer instantly!',
            class: 'active'
        },
        {
            id: 2,
            image: laptop2,
            title: 'Get paid to recycle your gadgets',
            blog: 'Book a free pickup from your home or work at a time slot as per your convenience'
        },
        {
            id: 3,
            image: laptop3,
            title: 'You can buy this product',
            blog: '100% Authentic and Trust Worthy'
        },

    ]

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    {
                        imageSlider.map(slider => <div key={slider.id} className={`carousel-item relative float-left w-full ${slider.class}`}>
                            <img
                                src={slider.image}
                                className="block w-full h-[600px] object-cover brightness-50"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute top-52 text-center">
                                <h5 className="text-5xl">{slider.title}</h5>
                                <p className='text-lg mt-5'>{slider.blog}</p>
                            </div>
                        </div>)
                    }
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;