import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// internal modules
import { routes } from 'router/routes';

// component
import LayoutBody from 'components/layout';
import PrivateRoute from 'router/PrivateRoute';
import Login from 'module/page/login';

function WrapRouter() {
  return (
    <LayoutBody>
      <Router>
        <Switch>
          <Route path="/signIn" component={Login} />
          {routes.map((item, index) => (
            <PrivateRoute key={index} {...item} />
          ))}
        </Switch>
      </Router>
    </LayoutBody>
  );
}

export default WrapRouter;
