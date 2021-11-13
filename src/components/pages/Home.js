import React from 'react';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Product from '../sections/Product';
import SlideShow from '../sections/SlideShow';
import Testimonials from '../sections/Testimonials';
import AboutUs from '../sections/AboutUs';


const Home = () => {
    return (
        <div>
            <Header />
            <SlideShow />
            <Product />
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;