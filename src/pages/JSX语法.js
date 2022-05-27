import { Component } from "react";
import '../styles/passVaule.css'

// JSX 学习
export default class JSXTips extends Component{
  constructor() {
    super()
    this.state = {
      // 可以嵌入并展示出的数据类型：
      num: 1,
      str: 'abc',
      arr: ['abc','cba','mba','nba'],
      // 不可以展示，React 内部会忽略，如要展示出来，可转为string；String(val), ""拼接, toString()
      arr2: [{a:1,b:2},{c:3,d:4}], // 因为对象，所以报错
      kong: null,
      noDefine: undefined,
      flag: false,
      obj: {
        a: 1,
        b: 2
      } // 报错信息：Objects are not valid as a React child； JSX html 内，react 认为是child, 不允许 object 格式的child

    }
  }
  getValue() {
    // console.log('111')
    return this.state.num + this.state.str
  }
  liClick(e, item, index) {
    // console.log(item,index)
  }
  render() {
    const {num, str, arr, arr2, kong, noDefine, flag, obj} = this.state;
    const dom = (
      <div className='borderSty'>
        <p>可用数据：{this.state.arr}</p>
        <p>可用表达式：{this.getValue()}</p>
        {
        /*1，可写的表达式：运算表达式 比如：+ 拼接str/计算number */
        /*2，三元运算表达式： ?: */
        /*3，函数调用：map等或直接的函数调用*/
        }
        <h2>{flag && '123'}</h2>
        {flag && <h2>'123'</h2>}
        <ul>
          {
            this.state.arr.map((item, index) => {
              return <li key={item} onClick={(e) => {this.liClick(e,item,index)}}>{item}</li>
            })
          }
        </ul>
      </div>
    )
    // console.log('1',dom)
    return dom;
  }
}