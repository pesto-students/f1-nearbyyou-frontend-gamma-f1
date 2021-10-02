import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ClientPrivateRoute = ({ children, ...rest }) => {
    const isAuth = true;
    return (
        <>
            <Route {...rest} render={() => isAuth ? (children) : (<Redirect to={'/'} />)} />
        </>
    )
}

export default ClientPrivateRoute;