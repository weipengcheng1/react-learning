import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "./index.css"

export default class Item extends Component {
    state = {mouse: false}
    static propTypes = {
        updateTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    handleCheckBoxChange = (event) => {
        this.props.updateTodos(event.target.name, event.target.checked)
    }
    //删除
    handleDelete = (id) => {
        if (window.confirm("是否确定删除？")) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {todoName, done, id} = this.props;
        const {mouse} = this.state;
        return (
            <li className="todo-item" style={{'backgroundColor': mouse ? "#f1f1f1" : "#fff"}}
                onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} name={id} onChange={this.handleCheckBoxChange}/>
                    <span>{todoName}</span>
                </label>
                <button className="btn btn-danger" style={{"display": mouse ? 'block' : 'none'}} onClick={() => {
                    this.handleDelete(id)
                }}>删除
                </button>
            </li>
        );
    }
}