import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//internal
import { routes } from 'router/routes';

//component
import LayoutBody from 'components/layout';

function WrapRouter() {
  return (
    <LayoutBody>
      <Router>
        <Switch>
          {routes.map((item, index) => (
            <Route key={index} {...item} />
          ))}
        </Switch>
      </Router>
    </LayoutBody>
  );
}

export default WrapRouter;
