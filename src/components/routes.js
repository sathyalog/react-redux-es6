import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import About from './about/about';
import Home from './home/home'
import Course from './course/course';

export default () => (
    <BrowserRouter>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">Admin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/" exact activeClassName="selected" className="nav-link" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/course" exact activeClassName="selected"className="nav-link" href="#">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" exact activeClassName="selected" className="nav-link" href="#">About</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/course" exact component={Course} />
        </Switch>
        </div>
        
    </BrowserRouter>
)