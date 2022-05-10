import React,{Component, createRef, PureComponent} from "react";
import '../styles/index.css'

// ref 获取DOM；
// ref 转发；
/**
 * 1，ref="字符串/对象/函数"；this.refs.名
 */

export default class RefFn extends Component{
  constructor(props,context) {
    super(props)
    this.myRef = createRef();
    this.pRef2 = null;
    this.cmpRef = createRef();
  }

  render() {
    return (
      <div className="borderSty">
        <p>Ref 功能</p>
        {/* 1, ref="字符串"，this.refs.字符串取，已被弃用 */}
        <p ref="changeP2">修改段落的内容1</p>
        {/* 2, createRef 创建一个 ref 对象*/}
        <input type="text" ref={this.myRef} onChange={this.inpChange}/>
        {/* 3，ref={}一个函数，里面会有一个传值，包含此DOM的信息 */}
        <p ref={ arg => this.pRef2 = arg}>修改段落的内容2</p>

        <button onClick={e => this.btnChange()}>点击通过ref修改文案</button>
        <hr/>

        <RefChild ref={this.cmpRef}/>
        <button onClick={e => this.btnChange2()}>点击修改组件内文案</button>

      </div>
    )
  }
  inpChange = (ele) => {
    // console.log('ele',ele)
    // console.log('ref',this.myRef)
    this.myRef.current.value = "强制修改"
  }
  btnChange() {
    // 此方式已被弃用
    // console.log(this.refs.changeP2);
    console.log(this.pRef2);
    // 这里没有current子对象
    this.pRef2.innerHTML = '修改了'
  }
  btnChange2() {
    this.cmpRef.current.changeMsg()
  }
}

class RefChild extends PureComponent{
  constructor() {
    super();
    this.state = {
      msg: '初始信息'
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
      </div>
    )
  }
  changeMsg() {
    this.setState({
      msg: '改变后的信息'
    })
  }
}


// 函数式组件不能使用ref, 因为他们没有实例，可以使用React.forwardRef 高阶函数，或者hook