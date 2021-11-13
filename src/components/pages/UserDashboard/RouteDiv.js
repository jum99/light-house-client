import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserOrder from './UserOrder';
import Review from './Review';
import Pay from './Pay';
import UserAccount from './UserAccount';
import AddProduct from './../AdminPage/AddProduct';
import MakeAdmin from './../AdminPage/MakeAdmin';
import ManageOrder from './../AdminPage/ManageOrder';
import ManageProduct from './../AdminPage/ManageProduct';
import { useAuth } from './../../../contexts/AuthContext';
import PrivateRoute from '../../../privateRoute/PrivateRoute';


const RouteDiv = () => {
    let { path } = useRouteMatch();


    const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: currentUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="">
            <UserAccount />
            <div className="wrapper">
                <Switch>

                    <PrivateRoute path={`${path}/addProduct`}><AddProduct /></PrivateRoute>
                    <PrivateRoute path={`${path}/makeAdmin`}><MakeAdmin /></PrivateRoute>
                    <PrivateRoute path={`${path}/manageOrder`}><ManageOrder /></PrivateRoute>
                    <PrivateRoute path={`${path}/manageProduct`}><ManageProduct /></PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}><Pay /></PrivateRoute>
                    <PrivateRoute path={`${path}/review`}><Review /></PrivateRoute>
                    <PrivateRoute path={`${path}/userOrder`} ><UserOrder /></PrivateRoute>
                    {isAdmin ?
                        <PrivateRoute exact path={`${path}/`} ><ManageProduct /> </PrivateRoute> :
                        <PrivateRoute exact path={`${path}/`} ><UserOrder /> </PrivateRoute>
                    }
                </Switch>
            </div>

        </div>
    );
};

export default RouteDiv;