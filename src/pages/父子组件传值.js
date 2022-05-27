import React,{Component} from 'react'
import '../styles/passVaule.css'
class PassValueChild extends Component{
    constructor(props,context) {
        super(props);
        this.state = {
            inpVal: ''
        }
    }
    valChangePass(ele) {
        this.setState({
            'inpVal': ele.target.value
        })
        this.props.getPassValue(ele.target.value)
    }
    render() {
        return (
            <div className='borderSty'>
                <p>这里是子组件</p>
                <span>这里是从父组件获取的值：{this.props.valueFromParent}</span>
                <input type="text" onChange={this.valChangePass.bind(this)}/>
                <p>这里是子组件显示input内容：{this.state.inpVal}</p>
                {/*
                <button onClick={this.clickPassValue.bind(this)}>点击传给父组件值</button>

                  this.clickPassValue.bind(this) -- 修改this指向 或 方法使用箭头函数
                  clickPassValue = ()=>{
                    //语句
                  }
                */}
                
            </div>
        )
    }
}
export default class PassValueParent extends Component{
    constructor(props,context){
        super(props)
        // this.state.valueFromChild = '' // error!
        this.state = {
            valueFromChild: ''
        }
    }
    getValueFromChild = (val) => {
        this.setState({
            valueFromChild: val
        })
    }
    render() {
        return (
            <div className='borderSty'>
                <p>这里是父组件</p>
                <span>这是从子组件收到的传值：{this.state.valueFromChild}</span>
                <PassValueChild getPassValue={this.getValueFromChild} valueFromParent="父传子"></PassValueChild>
            </div>
        )
    }
}