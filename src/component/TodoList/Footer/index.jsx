import React, {Component} from 'react';
import "./index.css"
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        checkedAllTodo: PropTypes.func.isRequired
    }
    handleCheckboxChange = (event) => {
        this.props.checkedAllTodo(event.target.checked)
    }

    handleDeleteDoneTodo=()=>{
        this.props.deleteDoneTodo()
    }

    render() {
        const {doneTotal, todoTotal} = this.props;

        return (
            <div className="todo-footer">
                <div className="todo-footer__left">
                    <label>
                        <input type="checkbox"
                               checked={todoTotal !== 0 && doneTotal === todoTotal}
                               onChange={this.handleCheckboxChange}/>
                        <span>已完成{doneTotal}/全部{todoTotal}</span>
                    </label>
                </div>
                <div className="todo-footer__right">
                    <button onClick={this.handleDeleteDoneTodo}>清除已完成任务</button>
                </div>
            </div>
        );
    }
}