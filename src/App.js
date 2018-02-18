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
          <div className="container-fluid">
              <div className="jumbotron">
                  <h1>Courses Administration</h1>
                  <p>Created using React, Redux and React Router in ES6</p>
              </div>
              <Routes/>
          </div>
    );
  }
}

export default App;
