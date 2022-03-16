import React, {Component} from 'react';
import store from './redux/store'
//引入 actionCreator用于创建action data
import {createSubtraction, createIncrementAction, createAsyncAddition} from './redux/count_action'

export default class App extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    handleOperation = (type) => {
        const {value} = this.selectNumber
        switch (type) {
            case "addition":
                store.dispatch(createIncrementAction(+value))
                break;
            case "subtraction":
                store.dispatch(createSubtraction(+value))
                break;
            case "odd":
                if (store.getState() % 2 !== 0) {
                    store.dispatch(createIncrementAction(+value))
                }
                break;
            case "async":
                store.dispatch(createAsyncAddition(+value, 2000))
                break;
        }
    }

    render() {
        return (
            <div className="spa-container">
                <div className="span-nav">
                    <h2>当前求和：{store.getState()}</h2>
                </div>
                <div className="spa-content">
                    <select ref={element => this.selectNumber = element}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <button className="btn btn-primary" onClick={() => {
                        this.handleOperation('addition')
                    }}>+
                    </button>

                    <button className="btn btn-primary" onClick={() => {
                        this.handleOperation('subtraction')
                    }}>-
                    </button>

                    <button className="btn btn-primary" onClick={() => {
                        this.handleOperation('odd')
                    }}>+ odd
                    </button>

                    <button className="btn btn-primary" onClick={() => {
                        this.handleOperation('async')
                    }}>+ async
                    </button>
                </div>
            </div>
        );
    }
}