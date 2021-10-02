import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Common_Pages/Header';
import Footer from '../Common_Pages/Footer';
import AdminHome from '../Vendor/Home'
import VendorPrivateRoute from './VendorPrivateRoute';

const VendorRoute = () => {
    return (
        <>
            <Header />
            <Switch>
                <VendorPrivateRoute path="/admin/app/home" >
                    <AdminHome />
                </VendorPrivateRoute>
                <Redirect to="/login" />
            </Switch>
            <Footer />
        </>
    )
}

export default VendorRoute;