import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://light-house-server.up.railway.app/allReview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);

    return (
        <section className="container">
            <div className="row ">
                <div className="text-center mb-4">
                    <div className="text-center mt-5 mb-3">
                        <h1>Clients Review</h1>
                        <p className="fst-italic color-fruit">The best testimonials</p>
                    </div>
                </div>

                {
                    testimonials.map((rev, index) => {
                        return (
                            <div key={index} className="d-flex col-md-4 justify-content-around">
                                <div key={index} className="card">
                                    <img src={rev.imageURL} className=" bg-gray img-fluid" alt="..." style={{ width: '100%', height: '250px' }} />
                                    <div className="card-body ">
                                        <h6>{rev.name}</h6>
                                        <p className="card-text">{rev.comment}</p>
                                        <h6 className="card-title">{rev.identity}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Testimonials;