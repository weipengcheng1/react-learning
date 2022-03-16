import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";
import {Button} from "antd";

export default class Message extends Component {
    state = {
        messages: [
            {id: 1, title: "message01"},
            {id: 2, title: "message02"},
            {id: 3, title: "message03"}
        ]
    }

    locationStyle = (style, id, title) => {
        this.props.history[style]({
            pathname: `/home/message/detail`,
            search: `?id=${id}&title=${title}&content=${title}`
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map(item => {
                            return <li key={item.id}>
                                {/*向路由组件传递params参数*/}
                                {/*<Link to={{pathname: `/home/message/detail/${item.id}/${item.title}/${item.title}`>{item.title}</Link>*/}


                                {/*向路由组件传递search参数*/}
                                {/*<Link
                                    to={{
                                        pathname: "/home/message/detail",
                                        search: `?id=${item.id}&title=${item.title}&content=${item.title}`
                                    }}>{item.title}</Link>*/}

                                {/*向路由组件传递state参数*/}
                                {/*<Link
                                    to={{
                                        pathname: "/home/message/detail",
                                        state: {id: item.id, title: item.title, content: item.title}
                                    }}>{item.title}</Link>*/}

                                {/* 编程式导航*/}
                                <Link
                                    to={{pathname: `/home/message/detail/${item.id}/${item.title}/${item.title}`}}>{item.title}</Link>
                                <Button type="primary" onClick={() => {
                                    this.locationStyle('push', item.id, item.title)
                                }}>
                                    push
                                </Button>
                                <Button type="danger" onClick={() => {
                                    this.locationStyle('replace', item.id, item.title)
                                }}>replace</Button>


                            </li>
                        })  
                    }
                </ul>
                <hr/>
                {/*声明接收params参数*/}
                {/*<Route path="/home/message/detail/:id/:title/:content" component={Detail}/>*/}

                {/*search参数无需声明接收*/}
                <Route path="/home/message/detail" component={Detail}/>
    
                {/*state参数无需声明接收*/}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}
            </div>
        );
    }
}