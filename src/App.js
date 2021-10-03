import React from 'react';
import ClientRoute from './Route/ClientRoute'
import VendorRoute from './Route/VendorRoute';
import { Switch, Route, Redirect } from 'react-router-dom';
import AlertSnackBar from './Common_Pages/AlertSnackbar';

function App() {
  return (
    <>
      <AlertSnackBar />
      <Switch>
        <Route path="/admin" component={VendorRoute} />
        <Route path="/" component={ClientRoute} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
