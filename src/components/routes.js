import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './about/about';
import Home from './home/home'
import Course from './course/course';
//import Header from './header';

export default() => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/course" exact component={Course}/>
        </Switch>
    </BrowserRouter>
)