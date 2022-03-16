import React, {Component} from 'react';
import {element} from 'prop-types'

export default class App extends Component {
    state = {count: 0}
    handleChange = () => {
        console.log(typeof this.selectNumber.value)
        this.setState({count: this.state.count += +this.selectNumber.value})
    }

    handleOperation = (type) => {
        console.log(type)

        switch (type) {
            case "addition":
                this.setState({count: this.state.count += 1});
                break;
            case "subtraction":
                this.setState({count: this.state.count -= 1});
                break;
            case "odd":
                if (this.state.count % 2 !== 0) {
                    this.setState({count: this.state.count += 1})
                }
                break;
            case "async":
                setTimeout(() => {
                    this.setState({count: this.state.count += 1})
                }, 3000)
                break;
        }
    }

    render() {
        const {count} = this.state;
        return (
            <div className="spa-container">
                <div className="span-nav">
                    <h2>当前求和：{count}</h2>
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