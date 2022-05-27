import React,{Component} from 'react'
import '../styles/index.css'

export default class ComputedWrite extends Component{
    constructor(props,context) {
        super(props)
        this.state = {
            msg: 'hello'
        }
    }
    get msg_computed() {
        return this.state.msg
    }
    render() {
        return (
            <div className='borderSty'>
                <p>react实现computed属性</p>
                <span>展示msg值：{this.msg_computed}</span>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'Hello React!'
            })
        },1000)
    }
}