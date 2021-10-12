import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Common_Pages/Header';
import Footer from '../Common_Pages/Footer';
import Login from '../Common_Pages/Login';
import Home from '../Client/Home';
import About from '../Client/About';
import ContactUs from '../Client/ContactUs';
import Listings from '../Client/Listings';
import Details from '../Client/Details';
import BookSlot from '../Client/BookSlot';
import ViewCategory from '../Client/ViewCategory';
import ViewTickets from '../Client/ViewTickets';
import ClientPrivateRoute from './ClientPrivateRoute';
import Counter from '../Client/Counter';

const ClientRoute = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/category" component={ViewCategory} />

                <ClientPrivateRoute exact path="/app/:categoryName/:categoryId" >
                    <Listings />
                </ClientPrivateRoute>

                <ClientPrivateRoute exact path="/app/:categoryName/:categoryId/pincode/:pincode" >
                    <Listings />
                </ClientPrivateRoute>

                <ClientPrivateRoute exact path="/app/:categoryName/:categoryId/:shopID" >
                    <Details />
                </ClientPrivateRoute>

                <ClientPrivateRoute exact path="/app/viewTickets" >
                    <ViewTickets />
                </ClientPrivateRoute>

                <ClientPrivateRoute exact path="/app/bookSlot" >
                    <BookSlot />
                </ClientPrivateRoute>

                <Redirect to="/" />
            </Switch>
            {/* <Counter/> */}
            <Footer />
        </>
    )
}

export default ClientRoute;