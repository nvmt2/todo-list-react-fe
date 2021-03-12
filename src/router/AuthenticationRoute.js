import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  let isAuthenticated = useSelector(
    (state) => state.authentication.signIn.successful
  );
  console.log('PrivateRoute component');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signIn',
            }}
          />
        )
      }
    ></Route>
  );
}
export default PrivateRoute;
