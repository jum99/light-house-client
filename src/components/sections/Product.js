import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Product.css';


const Product = () => {


    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fast-dawn-24079.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.reverse()))
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <h1 className="text-center mb-5">Fancy Decorative Lights</h1>
                <hr className="mt-3 hr-style" />
                {
                    product.slice(0, 6).map((item, index) => {
                        return (
                            <div key={index} className="col-md-4 mt-3 d-flex justify-content-around">
                                <div className="card" style={{ width: "20rem" }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={item.imageURL} alt="" className="img-fluid  p-3" style={{ height: '200px', width: '200px' }} />
                                    </div>
                                    <div class="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.shortDis}</p>
                                        <div className="d-flex align-items-center">
                                            <Link to={`/purchase/${item._id}`} className="btn btn-fruit">Buy Now</Link>
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
    );
};

export default Product;