import React, { PureComponent } from 'react';

// 高阶组件与高阶函数

export default class HigherOrderComp extends PureComponent {
  render() {
    return (
      <div>
        <EnhancePropPet name = "许莱恩" age = "3" />
        <EnhanceJsxPet name = "许莱克" age = "0" sex="male" login={true}/>
        <EhaceLifePet></EhaceLifePet>
      </div>
    );
  }
}
/**
 * 1, 劫持props
 */
class Pets extends PureComponent{
  componentDidMount() {
    // 先打印
    console.log('Pet ComponentDidMount')
  }
  componentWillUnmount() {
    console.log('Pet componentWillUnmount')
  }
  render() {
    return (
      <div>
        <p>宠物姓名：{this.props.name}</p>
        <p>宠物年龄：{this.props.age}</p>
        <p>宠物性别：{this.props.sex}</p>
      </div>
    )
  }
}
function enhanceGetProps(WrappedComponent) {
   class MiddleComp extends PureComponent{
     render() {
       return (
         <WrappedComponent {...this.props} sex="male" />
       )
     }
  }
  MiddleComp.displayName = 'Pet'
  return MiddleComp
}
const EnhancePropPet = enhanceGetProps(Pets)
/**
 * 2, 劫持JSX
 */
class LoginComp extends PureComponent{
  render() {
    return (
      <div>
        <h3>欢迎进入！</h3>
        <p>请先登录~</p>
      </div>
    )
  }
}
function enhanceGetJSX(WrappedComponent) {
  // 函数式
  return (props) => {
    if (props.login) {
      return < WrappedComponent { ...props } />
    } else {
      return < LoginComp / >
    }
  }
  {/* 
    // 类组件
  //  class Text extends PureComponent{
  //    constructor() {
  //      super()
  //    }
  //   render() {
  //     return (
  //       <div>
  //         if (this.props.login) {
  //           < WrappedComponent { ...this.props } />
  //         } else {
  //           < LoginComp />
  //         }
  //       </div>
  //     )
  //   }
  // }
  // return Text
  */}

}
const EnhanceJsxPet = enhanceGetJSX(Pets)
/**
 * 3, 劫持生命周期函数
 */
function enhaceLifeCycle (WrappedComponent) {
  return class extends PureComponent{
    componentDidMount() {
      console.log('Enhance ComponentDidMount')
    }
    componentWillUnmount() {
      console.log('Enhance componentWillUnmount')
    }
    render() {
      return (
        <WrappedComponent {...this.props}></WrappedComponent>
      )
    }
  }
}
const EhaceLifePet = enhaceLifeCycle(Pets)
/**
 * 4，反向继承，
 * 不建议使用，代码复用的主要方式是组合而不是继承
 */
function enhanceReverseInherit (WrappedComponent) {
  return class extends WrappedComponent{
    render() {
      // super.render() 可以调用WrappedComponent 中的 内容；不建议使用
      return(
        <div>

        </div>
      )
    }
  }
}