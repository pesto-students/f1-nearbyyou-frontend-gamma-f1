import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VendorHeader from '../Common_Pages/VendorHeader';
import Footer from '../Common_Pages/Footer';
import VendorHome from '../Vendor/Home'
import VendorPrivateRoute from './VendorPrivateRoute';
import ViewTicket from '../Vendor/ViewTicket';
import VendorProfile from '../Vendor/VendorProfile';
import ViewShop from '../Vendor/VendorShop';

const VendorRoute = () => {
    return (
        <>
            <VendorHeader />
            <Switch>

                <VendorPrivateRoute path="/vendor/app/home" >
                    <VendorHome />
                </VendorPrivateRoute>

                <VendorPrivateRoute path="/vendor/app/view_ticket/:id" >
                    <ViewTicket />
                </VendorPrivateRoute>

                <VendorPrivateRoute path="/vendor/app/profile" >
                    <VendorProfile />
                </VendorPrivateRoute>

                <VendorPrivateRoute path="/vendor/app/view_shop/:id" >
                    <ViewShop />
                </VendorPrivateRoute>
                
                <Redirect to="/login" />
            </Switch>
            <Footer />
        </>
    )
}

export default VendorRoute;