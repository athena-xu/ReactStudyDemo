import React,{Component} from 'react'
import style from '../styles/slotWrite.module.css'
import '../styles/slotWrite.css'
export default class SlotWrite extends Component{
    constructor(props,context) {
        super(props)
        this.state = {
            content: (
                <div>
                <p className={style.fontColor}>这里是插入的内容:CSS样式隔离</p>
            </div>
            )
        }
    }
    render() {
        return (
            <div className='borderSty'>
                <p className='fontColor'>react实现slot插槽</p>
                <TestComp content={this.state.content}></TestComp>
            </div>
        )
    }
}

class TestComp extends Component{
    constructor(props) {
        super(props)

    }
    render(){
        return (
            <div>
                <p>这里是组件</p>
                {this.props.content}
            </div>
        )
    }
}