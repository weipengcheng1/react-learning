import React, {Component} from 'react';
import qs from "query-string"

export default class Detail extends Component {
    render() {
        //params声明接收参数
        // const {match: {params: {id, title, content}}} = this.props

        //search 声明接收参数
        console.log(this.props)
        const {location: {search}} = this.props;
        const {id, title, content} = qs.parse(search.slice(1))

        //state 声明接收参数
        // const {location: {state: {id, title, content}}} = this.props

        return (
            <div>
                <ul>
                    <li>
                        <span>ID:</span>
                        <span>{id}</span>
                    </li>
                    <li>
                        <span>Title:</span>
                        <span>{title}</span>
                    </li>
                    <li>
                        <span>Content:</span>
                        <span>{content}</span>
                    </li>
                </ul>
            </div>
        );
    }
}