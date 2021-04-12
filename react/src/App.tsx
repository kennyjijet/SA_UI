import React from 'react';
import './App.css';
import {
  Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login'
import GeneralLayout from './layout/GeneralLayout';
import DashboardLayout from './layout/DashboardLayout';
import { createBrowserHistory } from 'history';
import { renderRoutes } from "react-router-config";
import { Routers } from './routes';



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Routers />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export const loggedIn: { status: boolean } = { status: false };

/*
  return (
    <Router history={history}>
      {
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        }
      <Switch>
        <AuthRoute>
          <Route exact path="/">
            <DashboardLayout component={Home} />
          </Route>
        </AuthRoute>
        <Route path="/login">
          <GeneralLayout component={Login} />
        </Route>
      </Switch>
    </Router >
  );
}
  */
// You can think of these components as "pages"
// in your app.
/* 

export const loggedIn: { status: boolean } = { status: false };
export const history = createBrowserHistory();

function AuthRoute(rest: any, prop: any) {
  return loggedIn.status ? rest.children : <GeneralLayout component={Login} />;
}

*/

