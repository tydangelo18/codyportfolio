import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PhotoPage from './Pages/PhotoPage';
import VideoPage from './Pages/VideoPage';
import AnimatePage from './Pages/AnimatePage';
import AboutPage from './Pages/AboutPage';
import './App.css';

const App = () => (
  <Fragment>
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/photos' component={PhotoPage} />
      <Route exact path='/videos' component={VideoPage} />
      <Route exact path='/animations' component={AnimatePage} />
      <Route exact path='/about' component={AboutPage} />
    </Router>
  </Fragment>
);

export default App;
