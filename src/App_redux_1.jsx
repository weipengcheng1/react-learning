import React, {Component} from 'react';
import store from './redux/store'

export default class App extends Component {

    handleChange = () => {
        console.log(typeof this.selectNumber.value);
        store.dispatch({type: "addition", data: +this.selectNumber.value})
    }

    handleOperation = (type) => {
        switch (type) {
            case "addition":
                store.dispatch({type: type, data: 1})
                break;
            case "subtraction":
                store.dispatch({type: type, data: 1})
                break;
            case "odd":
                if (store.getState() % 2 !== 0) {
                    store.dispatch({type: "addition", data: 1})
                }
                break;
            case "async":
                setTimeout(() => {
                    store.dispatch({type: "addition", data: 1})
                }, 3000)
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
                    <select ref={element => this.selectNumber = element} name="" id="" onChange={this.handleChange}>
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