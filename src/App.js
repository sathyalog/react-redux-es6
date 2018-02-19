import React, { Component } from 'react';
import Routes from './components/routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {Link, BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import Header from './components/header';
// import Home from './components/home/home';
// import About from './components/about/about'

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
