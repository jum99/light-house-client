import React, { useEffect, useState } from 'react';
import Header from './../sections/Header';
import { Link } from 'react-router-dom';

const Explore = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fast-dawn-24079.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.reverse()))
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h1 className="text-center">Our All Products</h1>
                    <hr className="mt-3 hr-style" />
                    {
                        product.slice(0, 10).map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 mt-3 d-flex justify-content-around">
                                    <div className="card">
                                        <div className="d-flex justify-content-center">
                                            <img src={item.imageURL} alt="" className="img-fluid  p-3" style={{ height: '200px', width: '200px' }} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.shortDescription}</p>
                                            <div className="d-flex align-items-center">
                                                <Link to={`/purchase/${item._id}`} className="btn regular-button">Buy Now</Link>
                                                <h5 className="color-fruit ms-auto">${item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    );
};

export default Explore;