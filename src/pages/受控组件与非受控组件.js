import React, { PureComponent, createRef } from 'react';

// 受控组件与非受控组件
// 受控组件：例如表单数据由 React组件来管理；
// 非受控组件：数据交由 DOM 节点来处理；

export default class UncontrolledComp extends PureComponent {
  constructor() {
    super();
    this.usernameRef = createRef();
    this.passWordRef = createRef();
    this.state = {
      username: '',
      nickname: '',
      password: ''
    }
  }
  render() {
    const {username, nickname, password} = this.state
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <label htmlFor='username'>
            用户名
          </label>
          <input type="text" ref={this.usernameRef}/>
          <label htmlFor='nickname'>
            昵称
          </label>
          <input type="text" value={nickname} onChange={e => this.nickChange(e)}/>
          <label htmlFor='password'>
            密码
          </label>
          <input type="password" ref={this.passWordRef}/>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  nickChange(e) {
    this.setState((prevState, props)=> {
      return {
        nickname: e.target.value
      }
    })
  }
  submit(e) {
    e.preventDefault();
    let sendData = {
      username: this.usernameRef.current.value,
      nickname: this.state.nickname,
      password: this.passWordRef.current.value
    }
    console.log('要提交的数据', sendData)
  }
}
