import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data.reverse()))
    }, [])


    const deleteItem = id => {
        fetch(`http://localhost:5000/deleteItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
                if (result) {
                    alert('This product is Deleted Please refresh page')
                }
            })
    }

    return (
        <div className="admin-section">

            <div className=" mt-3">
                <div className="d-flex">
                    <h2>Manage Products</h2>
                </div>
                <table className="table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((pd, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={pd.imageURL} alt="" className="img-fluid" style={{ width: '30px', height: '30px' }} /></td>
                                    <td>{pd.name}</td>
                                    <td>${pd.price}</td>
                                    <td>
                                        <Link to="#" className="btn btn-outline-primary me-2 ">Edit</Link>
                                        <button onClick={() => deleteItem(pd._id)} className="btn btn-danger me-2" >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};


export default ManageProduct;