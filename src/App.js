import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import CustomRoutes from './router/routes';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <Provider store={store}>
          <div className="app">
            <AppHeader />
            <CustomRoutes />
            <AppFooter />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
