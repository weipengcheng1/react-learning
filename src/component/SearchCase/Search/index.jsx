import React, {Component} from 'react';
import "./index.css"
import axios from "axios";
import PubSub from 'pubsub-js'

export default class Search extends Component {

    searchInput = async () => {
        const {value} = this.input;
        if (!value.trim()) return alert("请输入要搜索的关键词");
        PubSub.publish("subState", {isFirst: false, isLoading: true})
        try {
            const {data: {items}} = await axios.get(`/api/search/users?q=${value}`)
            PubSub.publish("subState", {isLoading: false, users: items, err: ''})
        } catch (e) {
            PubSub.publish("subState", {isLoading: false, err: e.message})
        }
    }

    render() {
        return (
            <div className="search-content">
                <div className="search-title">
                    <h3>搜索GitHub用户</h3>
                </div>
                <div className="search-int">
                    <input ref={(event) => {
                        this.input = event
                    }} className="input" type="text" placeholder="输入关键词点击搜索"/>
                    <button className="btn btn-primary" onClick={this.searchInput}>搜素</button>
                </div>
            </div>
        );
    }
}