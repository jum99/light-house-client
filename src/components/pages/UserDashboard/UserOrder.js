import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../../../contexts/AuthContext';

const UserOrder = () => {


    const { currentUser } = useAuth();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://fast-dawn-24079.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: currentUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteItem = id => {
        fetch(`https://fast-dawn-24079.herokuapp.com/cancelItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
                if (result) {
                    alert('This order is cancel! Please refresh page')
                }
            })
    }

    return (
        <div className="admin-section">

            <div className=" mt-3">
                <div className="d-flex">
                    <h2>My Orders</h2>
                </div>
                <table className="table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">code</th>
                            <th scope="col">price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((pd, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={pd.productImg} alt="" className="img-fluid" style={{ width: '30px', height: '30px' }} /></td>
                                    <td>{pd.productName}</td>
                                    <td>{pd.category}</td>
                                    <td>${pd.productPrice}</td>
                                    <td>
                                        <Link to="#" className="btn bg-gray color-white me-2" >pending</Link>
                                        <button onClick={() => deleteItem(pd._id)} className="btn btn-danger me-2" >Cancel</button>
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

export default UserOrder;