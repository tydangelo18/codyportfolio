import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

import AboutPage from './Pages/AboutPage';
import './App.css';

const App = () => (
  <Fragment>
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
    </Router>
  </Fragment>
);

export default App;
