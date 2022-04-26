import React, { Component, createContext } from 'react';

// 跨组件通信-2种
// props 层层传递；context上下文
// export default class StepCompApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '许莱恩',
//       date: '2022-04-25',
//       result: '阴性'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <CompMiddle name={this.state.name} date={this.state.date} result={this.state.result}></CompMiddle>
//       </div>
//     );
//   }
// }


// class CompMiddle extends Component{
//   render() {
//     return (
//       <div>
//         <CompGround name={this.props.name} date={this.props.date} result={this.props.result}></CompGround>
//         {/* {...this.props} 直接传一个对象*/}
//         <CompGround {...this.props}></CompGround>
//       </div>
//     )
//   }
// }
// class CompGround extends Component{
//   render() {
//     return (
//       <div>
//         <span>姓名：{this.props.name} </span>
//         <span>核酸日期：{this.props.date} </span>
//         <span>结果：{this.props.result} </span>
//       </div>
//     )
//   }
// }




// 函数组件 props 层层传递
// export default function StepFnApp() {
//   const state = {
//     name: '许莱恩',
//     date: '2022-04-25',
//     result: '阴性'
//   }
//   return (
//     <div>
//       {
//         FnMiddle(state)
//       }
//     </div>
//   )
// }
// function FnMiddle(props) {
//   return (
//     <div>
//       {
//         FnGround(props)
//       }

//     </div>
//   )
// }
// function FnGround(props) {
//   return (
//     <div>
//       <span>姓名：{props.name} </span>
//       <span>核酸日期：{props.date} </span>
//       <span>结果：{props.result} </span>
//     </div>
//   )
// }


// context方法Context, createContext 可以传一个默认值
const StepCompContext = createContext({
  name: '奥利奥',
  date: '2022-03-12',
  result: '阴性'
});
const StepCompContext2 = createContext({
  name: '许莱克',
  date: '2022-03-11',
  result: '阴性'
})
const StepCompContext3 = createContext({
  color: 'red',
  border: '1px solid #ff00ff'
})
export default class StepCompApp extends Component {
  constructor() {
    super();
    this.state = {
      name: '许莱恩',
      date: '2022-04-25',
      result: '阴性',
      color: 'red',
      border: '1px solid green'
    }
  }
  render() {
    return (
      <div>
        <StepCompContext.Provider value={this.state}>
        </StepCompContext.Provider>

        {/* value 必填 子组件不在包含内也可以，会找接受的上下文，取默认值 */}
        <StepCompContext2.Provider value={this.state}>
        </StepCompContext2.Provider>
        <CompMiddle></CompMiddle>

        <StepCompContext3.Provider value={this.state}>
        
          <StepCompContext.Provider value={this.state}>
            <CompMiddle></CompMiddle>
          </StepCompContext.Provider>

        </StepCompContext3.Provider>
          

      </div>
    );
  }
}

class CompMiddle extends Component{
  render() {
    return (
      <div>
        <CompGround></CompGround>
      </div>
    )
  }
}
// 类组件接受props有两种方式：1. consumer
class CompGround extends Component{
  render() {
    return (

      <StepCompContext3.Consumer>
        {
          value => {
            return (
              <StepCompContext.Consumer>
                {
                  data => {
                    return (
                      <div style={{color: value.color, border: value.border}}>
                        <span>姓名：{data.name} </span>
                        <span>核酸日期：{data.date} </span>
                        <span>结果：{data.result} </span>
                      </div>
                    )
                  }
                }
              </StepCompContext.Consumer>
            )
          }
        }
      </StepCompContext3.Consumer>

    )
  }
}

// 2. 类组件有个 contextType 属性，内部有this.context 对象

// class CompGround extends Component{
//   render() {
//     console.log('this.context => ',this.context)
//     return (
//       <div>
//         <span>姓名：{this.context.name} </span>
//         <span>核酸日期：{this.context.date} </span>
//         <span>结果：{this.context.result} </span>
//       </div>
//     )
//   }
// }
// CompGround.contextType = StepCompContext2;


// 函数组件 context 的应用，函数组件没有contextType 属性，也没有内部 this.context
// export default function StepFnApp() {
//   const state = {
//     name: '许莱恩',
//     date: '2022-04-25',
//     result: '阴性'
//   }
//   return (
//     <div>
//       <StepCompContext.Provider value={state}>
//         {
//           FnMiddle()
//         }
//       </StepCompContext.Provider>
//     </div>
//   )
// }
// function FnMiddle() {
//   return (
//     <div>
//       {
//         FnGround()
//       }

//     </div>
//   )
// }
// function FnGround() {
//   return (
//     <StepCompContext.Consumer>
//       {
//         value => {
//           return (
//             <div>
//               <span>姓名：{value.name} </span>
//               <span>核酸日期：{value.date} </span>
//               <span>结果：{value.result} </span>
//             </div>
//           )
//         }
//       }
//     </StepCompContext.Consumer>
//   )
// }