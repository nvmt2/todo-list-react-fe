import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute(props) {
  const { component: Component, path, exact, ...rest } = props;

  let { isAuthenticated } = useSelector((state) => state.user);
  console.log('PrivateRoute component');

  return (
    <Route
      {...rest}
      path
      exact
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signIn',
              state: path,
            }}
          />
        )
      }
    ></Route>
  );
}
export default PrivateRoute;
