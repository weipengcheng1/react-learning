import React, {Component} from 'react';
import "./index.css"
import PubSub from "pubsub-js";

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ""
    }

    componentDidMount() {
        const _this = this;
        this.token = PubSub.subscribe("subState", (msgName, data) => {
            _this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {isFirst, isLoading, users, err} = this.state
        return (
            <div className="list-content">
                {
                    isFirst ? <div className="list-tips__info">
                        <h3>欢迎使用，输入关键字，随后点击搜索</h3>
                    </div> : isLoading ? <div className="list-tips__info">
                        <h3>Loading...</h3>
                    </div> : err ? <div className="list-tips__info">
                        <h3 style={{'color': "red"}}>{err}</h3>
                    </div> : <div className="list">
                        {
                            users.map(item => {
                                return <div className="list-item" key={item.id}>
                                    <div className="img">
                                        <img
                                            src={item['avatar_url']}
                                            alt="Picture is cracked"/>
                                    </div>
                                    <div className="span">
                                        <a href={item['html_url']} target="_blank">{item['login']}</a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}