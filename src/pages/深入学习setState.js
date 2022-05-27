import React, { Component } from 'react';

// setState 可以传对象或函数
// setState 原理：Object.assign({}, preState, partialState) 拷贝
// 异步的时候，批量操作修改 合并了Object.assign({}, preState, partialState1, partialState2, partialState3)，
// 最后一个包含 这个key 的对象值会覆盖前面的


export default class SetStateExplain extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: 'hello, world'
    }
  }
  render() {
    return (
      <div>
        <span>当前计数：{this.state.count}</span>
        <span>当前消息：{this.state.msg}</span>
        <button className="btnClick" onClick={e => {this.increment()}}>+1</button>
      </div>
    );
  }
  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    
    // this.setState(() => {
    //   return {
    //     count: this.state.count + 1
    //   }
    // })
    // this.setState(() => {
    //   return {
    //     count: this.state.count + 1
    //   }
    // })
    // this.setState(() => {
    //   return {
    //     count: this.state.count + 1
    //   }
    // })
    // 多个 setState 返回仍是1，异步执行，因为 button 的 onClick 为 React 的合成事件；


    // 传入函数修改，使用preState ，就可进行累加
    // this.setState((prevState, props) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // this.setState((prevState, props) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // this.setState((prevState, props) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // }) // 返回3



    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }) // 放到setTimeout 中 返回的就是 3， 变成了同步执行
    
    // console.log('increment', this.state.count)
  }
  componentDidMount() {
    // console.log('componentDidMount', this.state.count)

    // 原生DOM 事件中 setState 也是同步的
    // document.getElementsByClassName('btnClick')[0].addEventListener('click', e => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('原生DOM 事件', this.state.count)
    // })
  }
}
