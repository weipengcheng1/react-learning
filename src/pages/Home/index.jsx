import React, {Component} from 'react';
import MyNavLink from "../../component/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h4>关于Home内容</h4>
                <div className="spa-container">
                    <div className="span-nav">
                        <MyNavLink to="/home/news">News</MyNavLink>
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </div>
                    <div className="spa-content">
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                            <Redirect to="/home/message"/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}