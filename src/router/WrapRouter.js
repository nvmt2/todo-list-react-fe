import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// internal modules
import { privateRoutes, publicRoutes } from 'router/routes';

// component
import LayoutBody from 'layout';
import PrivateRoute from 'router/PrivateRoute';

function WrapRouter() {
  return (
    <LayoutBody>
      <Router>
        <Switch>
          {publicRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))}
          {privateRoutes.map((item, index) => (
            <PrivateRoute key={index} {...item} />
          ))}
        </Switch>
      </Router>
    </LayoutBody>
  );
}

export default WrapRouter;
