import React from 'react';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Product from '../sections/Product';
import SlideShow from '../sections/SlideShow';
import Testimonials from '../sections/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <SlideShow />
            <Product />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;