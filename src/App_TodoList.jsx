import React, {Component} from 'react'
import {Header, List, Footer} from "./component/TodoList"
import "./App.css"


export default class App extends Component {
    state = {
        todos: [
            {id: "1", todoName: "敲代码", done: true}
        ]
    }
    //添加todo
    addTodo = (todo) => {
        const todos = [todo, ...this.state.todos];
        this.setState({todos})
    }

    //更新todos
    updateTodos = (id, done) => {
        const {todos} = this.state;
        todos.forEach(item => {
            if (item.id === id) {
                item.done = done
            }
        });
        this.setState({todos})
    }
    //删除
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter(item => {
            return item.id !== id
        })
        this.setState({todos: newTodos})
    }

    //全选
    checkedAllTodo = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.map(item => {
            return {...item, done: flag}
        })
        this.setState({todos: newTodos})
    }
    //清除所有已完成的任务
    deleteDoneTodo = () => {
        const {todos} = this.state;
        const newTodos = todos.filter(item => {
            return !item.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state;
        const doneTotal = todos.reduce((pre, todo) => {
            return todo.done ? pre + 1 : pre
        }, 0)
        return (
            <div className="todo-container">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodos={this.updateTodos} deleteTodo={this.deleteTodo}/>
                <Footer todoTotal={this.state.todos.length} doneTotal={doneTotal} checkedAllTodo={this.checkedAllTodo}
                        deleteDoneTodo={this.deleteDoneTodo}/>
            </div>
        )
    }
}



