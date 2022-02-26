import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './component/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div className="spa-container">
                <div className="span-nav">
                    <MyNavLink to="/home" title="home">Home</MyNavLink>
                    <MyNavLink to={{pathname: "/about", search: "?a=b"}} title="about">About </MyNavLink>
                </div>
                <div className="spa-content">
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </div>
        );
    }
}