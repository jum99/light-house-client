import React from 'react';
import AboutImg from '../../images/fp.jpeg';
import Header from './Header';

const AboutUs = () => {
    return (
        <div className="container">
            <Header />
            <div className="row mt-5 align-items-center">
                <div className="text-center mt-5 mb-3">
                    <h1>About Us</h1>
                    <p className="fst-italic color-fruit">The best shop for decorative lights</p>
                </div>
                <div className="col-md-6 mt-3">
                    <img src={AboutImg} alt="" className="w-75 img-fluid" />
                </div>
                <div className="col-md-6 ps-4 mt-3">

                    <p className="fs-14 mt-3">Welcome to the Online Lighting Shop, we are one of the largest lighting companies in the UK.  We stock products from the Best Lighting Brands across the UK and Europe.

                        Whether you are looking to improve your Home or Garden Lighting we can help find the right Light for you.

                        With Over 40 Years in the Lighting Business you can trust us to fulfill your Lighting Needs.
                        <br />
                        We have pledged to try our best to provide the most competitive prices in the market, if you find the same product for less contact us and we'll try our best to beat their price!
                        Free Delivery - We provide a Free Delivery service through the UK for all orders over $75!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;