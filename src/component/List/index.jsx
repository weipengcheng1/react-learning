import React, {Component} from 'react';
import PropTypes from "prop-types"
import "./index.css"
import Item from '../Item'

export default class List extends Component {
    static  propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    render() {
        const {todos, updateTodos, deleteTodo} = this.props
        return (
            <div className="todo-list">
                <ul>
                    {
                        todos.map(todo => {
                            return <Item key={todo.id} {...todo} updateTodos={updateTodos} deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}