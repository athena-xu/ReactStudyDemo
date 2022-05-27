import React, { Component, PureComponent, memo } from 'react';
import '../styles/index.css'

/**
 * render 性能优化
 * shouldComponentUpdate(nextProps,nextState) 返回true或false
 * PureComponent;
 * PureComponent 和shouldComponetUpdate 不能同时存在
 * PureComponent 原型上有 isPureReactComponent 属性，浅比较 （shallowEqual）判断如果 props 没有变就不会重新渲染 ; 改变mainData 某一项的price值没有触发渲染
 * 
 * memo 高阶组件，适用于函数式组件
 * 
 */


export default class RenderOptimize extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      headerMsg: '这里是header',
      mainMsg: '这里是main',
      footerMsg: '这里是footer',
      mainData: [{
        id: 1,
        title: '这本book',
        price: '2.00'
      },{
        id: 2,
        title: '那本book',
        price: '3.00'
      },{
        id: 3,
        title: '内本book',
        price: '4.00'
      },{
        id: 4,
        title: '哈本book',
        price: '5.00'
      },
    ]
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
    // 改变count 才会渲染，改变msg不会渲染
  //   if(this.state.count !== nextState.count)
  //   return true

  //   return false
  // }
  render() {
    console.log('father render')
    const {count, headerMsg, mainMsg, footerMsg, mainData} = this.state
    return (
      <div className="borderSty">
        <span>当前计数：{count}</span>  
        <button onClick={() => {this.increment()}}>+1</button>
        <button onClick={() => {this.changeMsg('headerMsg')}}>改变HeaderMsg</button>
        <button onClick={() => {this.changeMsg('mainMsg')}}>改变MainMsg</button>
        <button onClick={() => {this.changeMsg('footerMsg')}}>改变FooterMsg</button>
        <button onClick={() => {this.changeData()}}>改变mainData</button>
        <Header msg={headerMsg}/>
        <Main msg={mainMsg} mainData={mainData}/>
        <Footer msg={footerMsg}/>
      </div>
    );
  }
  increment() {
    // 点击更新count 会触发重新渲染，header、main、footer 都重新渲染了, 但是msg 并没有变
    this.setState((preState, props) => {
      return {
        count: preState.count + 1
      }
    })
  }
  changeMsg(type) {
    this.setState((preState,props) => {
      return {
        [type]: '改变后的msg'
      }
    })
  }
  changeData() {
    // 不会触发改变，因为mainDataCopy 和 this.state.mainData 引用一样；
    // const mainDataCopy = this.state.mainData;
    // mainDataCopy[1].price = '10.00'
    // this.setState((preS,props) => {
    //   return {
    //     mainData: mainDataCopy
    //   }
    // })

    // 这样可以改变，mainDataCopy 开辟了一个新的内存空间
    const mainDataCopy = [...this.state.mainData];
    mainDataCopy[1].price = '10.00'
    this.setState((preS,props) => {
      return {
        mainData: mainDataCopy
      }
    })
  }
}
class Header extends Component{
  render() {
    console.log('Header render')
    return (
      <div>Header: {this.props.msg}</div>
    )
  }
  // shouldComponentUpdate(nextProps,nextState) {
  //   if(this.props.msg !== nextProps.msg)
  //   return true 
  //   return false
  // }
}
class Main extends PureComponent{
  // PureComponent 浅比较 （shallowEqual）判断如果 props 没有变就不会重新渲染 ; 改变mainData 某一项的price值没有触发渲染
  render() {
    console.log('Main render')
    return (

      <div>Main: {this.props.msg}
        <ul>
          {
            this.props.mainData.map(v => {
              return <li key={v.id}>{v.title+"售价"+v.price}</li>
            })
          }
        </ul>      
      </div>

    )
  }
}

const Footer = memo(function (props) {
  console.log('Footer render')

  return (
    <div>
      <div>Footer: {props.msg}</div>
    </div>
  );
})
