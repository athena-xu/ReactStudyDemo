import React,{Component} from "react";
import '../styles/index.css'
export default class RefFn extends Component{
    myRef = React.createRef();
    constructor(props,context) {
        super(props)

    }
    inpChange = (ele) => {
        // console.log('ele',ele)
        // console.log('ref',this.myRef)
    }
    render() {
        return (
            <div className="borderSty">
                <p>Ref 功能</p>
                <input type="text" ref={this.myRef} onChange={this.inpChange}/>
            </div>
        )
    }
}