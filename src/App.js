import React from 'react';
import ClientRoute from './Route/ClientRoute'
import VendorRoute from './Route/VendorRoute';
import { Switch, Route, Redirect } from 'react-router-dom';
import AlertSnackBar from './Common_Pages/AlertSnackbar';
import axios from 'axios';
import configAppConst from './Common_Pages/Configrations'


import VendorHome from './Vendor/Home'

//Default Url And Header 
axios.defaults.baseURL = configAppConst.localBaseURL;


function App() {
  return (
    <>
      <AlertSnackBar />
      <Switch>


        <Route exact path="/vendor/home" component={VendorHome} />

        <Route path="/vendor" component={VendorRoute} />
        <Route path="/" component={ClientRoute} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
