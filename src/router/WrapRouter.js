import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// internal modules
import { privateRoutes, publicRoutes } from 'constance/routes';
// internal component
import LayoutBody from 'layout';
import PrivateRoute from 'router/PrivateRoute';

function WrapRouter() {
  return (
    <Router>
      <LayoutBody>
        <Switch>
          {publicRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))}
          {privateRoutes.map((item, index) => (
            <PrivateRoute key={index} {...item} />
          ))}
        </Switch>
      </LayoutBody>
    </Router>
  );
}

export default WrapRouter;
