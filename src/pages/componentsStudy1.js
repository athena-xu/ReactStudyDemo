/**
 * 类组件/函数式组件
 */
import react, {Component} from 'react'

export default class Hello extends Component{
  /**
   * constructor 可选，一般初始化数据；
   * this.state 管理内部数据；
   * render 方法必须实现
   */
  constructor() {
    super();
    this.state = {
      msg: 'React'
    }
  }
  render() {
    return (
      <div>Hello, {this.state.msg}</div>
    )
  }
}

// export default function Hello () {
//   /**
//    * 没有this对象
//    * 没有内部状态管理，（衍生出hooks）
//    * 没有生命周期函数，（也会被更新挂载）
//    */
//   return (
//     <div>Hello, React</div>
//     /**
//      * [
//      *  <div>Hello, World</div>,
//      *  <div>Hello, React</div>
//      * ]
//      */
//   )
// }