import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth'

const VendorPrivateRoute = ({ children, ...rest }) => {
   
    console.log("Auth.isAuthenticated :- ", auth.isAuthenticated());
    const isAuth = auth.isAuthenticated();
    return (
        <>
            <Route {...rest} render={() => isAuth ? (children) : (<Redirect to={'/login'} />)} />
        </>
    )
}

export default VendorPrivateRoute;