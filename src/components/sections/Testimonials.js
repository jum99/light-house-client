import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import ReactOwlCarousel from 'react-owl-carousel';



const Testimonials = () => {



    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allReview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])




    const options = {
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        responsive: {
            1: { items: 1 },
            550: { items: 2 },
            786: { items: 3 },
            1200: { items: 3 }
        }
    };

    return (
        <section className="container">
            <div className="row ">
                <div className="text-center mb-4">
                    <div className="text-center mt-5 mb-3">
                        <h1>We love our clients</h1>
                        <p className="fst-italic color-fruit">The best testimonials</p>
                    </div>
                </div>
                {/* <ReactOwlCarousel className='owl-theme'  {...options}>
                    {
                        testimonials.map((rev, index) => {
                            return (
                                <div key={index} className="d-flex justify-content-around">
                                    <div key={index} className="card " style={{ width: '22rem' }}>
                                        <img src={rev.imageURL} className=" bg-gray img-fluid" alt="..." style={{width:'350',height:'200'}} />
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
                </ReactOwlCarousel> */}
                {
                    testimonials.map((rev, index) => {
                        return (
                            <div key={index} className="d-flex col-md-4 justify-content-around">
                                <div key={index} className="card  " style={{ width: '22rem' }}>
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