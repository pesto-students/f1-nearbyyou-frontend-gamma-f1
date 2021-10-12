import React from 'react';
import auth from './Auth'
import { Route, Redirect } from 'react-router-dom';

const ClientPrivateRoute = ({ children, ...rest }) => {

    console.log("Auth.isAuthenticated :- ", auth.isAuthenticated());

    const isAuth = auth.isAuthenticated();
    return (
        <>
            <Route {...rest} render={() => isAuth ? (children) : (<Redirect to={'/login'} />)} />
        </>
    )
}

export default ClientPrivateRoute;