import React, {Component} from 'react'
import {nanoid} from 'nanoid'
import "./index.css"

export default class Header extends Component {
    handleOnKeyUp = (event) => {
        const {target, keyCode} = event;
        if (keyCode !== 13) return;
        const value = target.value.trim();
        if (!value) return alert("请稍后内容");
        this.props.addTodo({id: nanoid(), todoName: value, done: false})
        target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车确认" onKeyUp={this.handleOnKeyUp}/>
            </div>
        )
    }
}
