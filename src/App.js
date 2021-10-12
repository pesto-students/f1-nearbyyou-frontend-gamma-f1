import React from 'react';
import Header from './Common_Pages/Header';
import Footer from './Common_Pages/Footer';
import Login from './Common_Pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';

//Customer Page
import Home from './Client/Home';
import About from './Client/About';
import ContactUs from './Client/ContactUs';
import Listings from './Client/Listings';
import Details from './Client/Details';
import BookSlot from './Client/BookSlot';
import ViewCategory from './Client/ViewCategory';
import ViewTickets from './Client/ViewTickets';

//Vendor Page
import VendorHome from './Vendor/Home'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/viewCategory" component={ViewCategory} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/bookSlot" component={BookSlot} />
        <Route exact path="/viewTickets" component={ViewTickets} />

        <Route exact path="/vendor/home" component={VendorHome} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
