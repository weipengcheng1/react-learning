import React, {Component} from 'react';
import {Search, List} from "./component/SearchCase";


export default class App extends Component {
    render() {
        return (
            <div className="search-case__container">
                <Search/>
                <List/>
            </div>
        );
    }
}