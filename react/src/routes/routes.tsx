import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { RouteConfig, renderRoutes } from "react-router-config";
import Home from '../component/Home';
import Login from '../component/Login'
import GeneralLayout from '../layout/GeneralLayout';
import DashboardLayout from '../layout/DashboardLayout';
import LOPA from '../page/LOPA';

function Routers() {
  const routes: RouteConfig[] = [
    {
      path: "/",
      exact: true,
      component: LOPA
    }
  ];
  return (
    renderRoutes(routes)
  );
}
export default Routers;

/* 

<Router>
      <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
            </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={HomeComponents} />
          </Switch>
        </div>
    </Router>

*/