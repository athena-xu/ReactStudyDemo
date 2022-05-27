import React, { PureComponent } from 'react';

// 模板字符串
export default class TemplateGrammer extends PureComponent {
  constructor() {
    super();
    this.state = {
      title1: '模板字符串的基本使用',
      title2: '模板字符串调用函数'
    }
  }
  componentDidMount() {
    const firArg = 1;
    const secArg = 10;
    this.sum`第二种使用： ${this.state.title2} 入参：${firArg}; ${secArg}`
  }
  render() {
    return (
      <div>
        <span>{`第一种使用： ${this.state.title1}`}</span>
      </div>
    );
  }
  sum(...args) {
    console.log('通过模板字符串调用得到的参数：', args)
  // [ ["第二种使用： ", " 入参：", "; ", "" ], "模板字符串调用函数", 1, 10 ]
  // 第一位是切割的字符串数组，后面为${}的入参
  }
}


