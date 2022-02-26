import React, {Component} from 'react';

export default class About extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h4>关于about内容</h4>
            </div>
        );
    }
}