import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    //let auth = useAuth();
    const context = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = context;

    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;