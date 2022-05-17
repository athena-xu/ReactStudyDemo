import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'
import '../styles/index.css'

// portal 传送门，选择comp 挂载的节点，应用示例：Modal
export default class PortalsStudy extends PureComponent {
  render() {
    return (
      <div>
        <ModalPortals/>
      </div>
    );
  }
}
class ModalPortals extends PureComponent{
  render() {
    return (
      ReactDOM.createPortal(<Modal/>, document.getElementById('modal-wrapper'))
    )
  }
}
class Modal extends PureComponent {
  componentDidMount() {
    console.log('112',document.getElementById('modal-wrapper'))
  }
  render() {
    return (
      <div className='modal-bg'>
        <div className='modal-content'>
          弹窗内容
        </div>
      </div>
    )
  }
}

