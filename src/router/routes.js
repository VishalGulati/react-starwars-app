import React from 'react';
import { Route } from 'react-router-dom';
import { loginRoute, searchRoute, searchDetailsRoute } from './route-constants';
import Login from '../components/Login/Login';
import Search from '../components/Search/Search';
import SearchDetails from '../components/Search/SearchDetails';

// route config
const routes = [
  // {
  //   path: '/',
  //   component: Login,
  //   pathMatch: 'full'
  // },
  {
    path: `/`,
    component: Login
  },
  {
    path: `/${searchRoute}`,
    component: Search
  },
  {
    path: `/${searchDetailsRoute}`,
    component: SearchDetails
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const CustomRoutes = () => (
  <main>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </main>
);

export default CustomRoutes;
