import { Component } from "react";
import '../styles/passVaule.css'

export default class Counter extends Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className='borderSty'>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}