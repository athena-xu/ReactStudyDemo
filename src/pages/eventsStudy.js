import React, { PureComponent } from 'react';
import { EventEmitter } from 'events'

// 事件总线：event bus
// 开发中可以将 EventEmitter 对象单独放在一个文件中，export 出来

const eventBus = new EventEmitter();

export default class EventsStudy extends PureComponent {
  constructor() {
    super();
    this.state = {
      msg: '',
      count: ''
    }
  }
  componentDidMount() {
    eventBus.addListener('emitMsg', (msg, count) => {
      this.setState({
        msg: msg,
        count: count
      })
    })
  }
  componentWillUnmount() {
    eventBus.removeListener('emitMsg')
  }
  render() {
    return (
      <div>
        这是收到的信息：{this.state.msg}
        <br/>
        这是计数：{this.state.count}
        <EventsStudyChild />
      </div>
    );
  }
}

class EventsStudyChild extends PureComponent{
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>点击传递一个msg</button>
      </div>
    )
  }
  btnClick() {
    eventBus.emit('emitMsg', '这是从child传来的一条消息', 1)
  }
}