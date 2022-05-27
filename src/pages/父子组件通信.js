import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 父子组件通信
// 类组件
export default class ClassCompFather extends Component {
  render() {
    return (
      <div>
        {/* 类组件传值使用props，子向父传值也是 */}
        <ClassCompChild name={'xsj'} age={18} sex={'female'} hobby={['play', 'cook']} speak={(sex) => this.speakSth(sex)}/>
        <ClassCompChild name="xulion" age={4} sex={'tom'} hobby={['eat', 'sleep']} speak={(sex) => this.speakSth(sex)}/>
      </div>
    );
  }
  speakSth(sex) {
    if(sex == 'tom') {
      console.log('miao~miao~')
    }
    if(sex == 'female') {
      console.log('good good study!')
    }
  }
}

class ClassCompChild extends Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    hobby: PropTypes.array
  }
  static defaultProps = {
    sex: 'male',
  }
  // static 类的静态属性，类组件属性验证两种方式
  render() {
    const { name, age, sex, hobby, speak } = this.props;
    return (
      <div>
        <span onClick={() => speak(sex)}>{name} </span>
        <span>{age} </span>
        <span>{sex} </span>
        {hobby.map(item => <span key={item}>{item} </span>)}
      </div>
    )
  }
}


// // 函数组件
// export default function FnCompFather() {
//   function speakSth(sex) {
//     if(sex == 'tom') {
//       console.log('miao~miao~')
//     }
//     if(sex == 'female') {
//       console.log('good good study!')
//     }
//   }
//   return (
//     <div>
//       <FnCompChild name={'xsj'} age={18} sex={'female'} hobby={['play', 'cook']} speak={(sex) => speakSth(sex)}/>
//       <FnCompChild name="xulion" age={4} sex={'tom'} hobby={['eat', 'sleep']} speak={(sex) => speakSth(sex)}/>
//     </div> 
//   )
// }
// function FnCompChild (props) {
//   const { name, age, sex, hobby, speak } = props;
//   return (
//     <div>
//       <span onClick={() => speak(sex)}>{name} </span>
//       <span>{age} </span>
//       <span>{sex} </span>
//       {hobby.map(item => <span>{item} </span>)}
//     </div>
//   )
// }
// // 类组件也可以用这种方式
// FnCompChild.propTypes = {//小写
//   name: PropTypes.string.isRequired,//大写
//   age: PropTypes.number,
//   sex: PropTypes.string.isRequired,
//   hobby: PropTypes.array
// }
// FnCompChild.defaultProps = {
//   sex: 'male',
// }