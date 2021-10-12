import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VendorHeader from '../Common_Pages/VendorHeader';
import Footer from '../Common_Pages/Footer';
import VendorHome from '../Vendor/Home'
import VendorPrivateRoute from './VendorPrivateRoute';
import ViewTicket from '../Vendor/ViewTicket';
import VendorProfile from '../Vendor/VendorProfile';

const VendorRoute = () => {
    return (
        <>
            <VendorHeader />
            <Switch>

                <VendorPrivateRoute path="/vendor/app/home" >
                    <VendorHome />
                </VendorPrivateRoute>

                <VendorPrivateRoute path="/vendor/app/view_ticket/:ticketID" >
                    <ViewTicket />
                </VendorPrivateRoute>

                <VendorPrivateRoute path="/vendor/app/profile" >
                    <VendorProfile />
                </VendorPrivateRoute>
                
                <Redirect to="/login" />
            </Switch>
            <Footer />
        </>
    )
}

export default VendorRoute;