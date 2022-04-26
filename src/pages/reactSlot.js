import React, { Component } from 'react';
import '../styles/index.css'
import '../styles/reactSlot.css'

// 三列布局标题栏，中间固定为搜索框

export default class ReactFather extends Component {
  render() {
    return (
      <div>
        {/* 直接组件标签里面写，组件内部用this.props.children 获取 */}
        <TitleBar>
          <div>搜索</div>
          <input></input>
          <div>取消</div>
        </TitleBar>

        {/* 通过props 传递 */}
        <TitleBarSlot slotLeft={<div>搜索</div>} slotRight={<div>取消</div>}></TitleBarSlot>
      </div>
    );
  }
}

class TitleBar extends Component {
  render () {
    return (
      <div className="borderSty titleBar">
        <div className="left">
          { this.props.children?.[0] || '图片'}
        </div>
        <div className='middle'>
          {
            this.props.children?.[1] || <input className="searchInp" placeholder="请输入搜索内容"></input>
          }
        </div>
        <div className="right">
          { this.props.children?.[2] || '叉'}
        </div>
      </div>
    )
  }
}
class TitleBarSlot extends Component{
  render() {
    return (
      <div className="borderSty titleBar">
        <div className="left">
          { this.props.slotLeft || '图片'}
        </div>
        <div className='middle'>
          {
            this.props.slotMiddle || <input className="searchInp" placeholder="请输入搜索内容"></input>
          }
        </div>
        <div className="right">
          { this.props.slotRight || '叉'}
        </div>
      </div>
    )
  }
}
