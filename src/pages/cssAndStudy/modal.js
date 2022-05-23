import React, { PureComponent } from 'react';
import styled from 'styled-components';

const MaskWrapper = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  /* width: 100%; */
  /* height: 100%; */
  background-color: rgba(0,0,0,0.7);
  display: ${props => props.show ? 'block' : 'none'};
`

const ModalWrapper = styled.div.attrs({
  width: '80%',
  height: '70%',
  backgroundColor: '#fff',
})`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  opacity: 1;
  margin: calc(10%) auto;

  .modalBar {
    position: relative;
    height: 40px;
    line-height: 40px;
    background-color: #f5eeec;
    text-align: center;
    color: #333;
    font-weight: bold;
  }
  .modalFooter {
    text-align: right;
    padding-right: 14px;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
`
const CloseIcon = styled.span`
  position: absolute;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`
const ModalContent = styled.div`
  padding: 14px 20px;
  height: calc(100% - 100px);
  box-sizing: border-box;
  text-align: left;
`

const ModalBtn = styled.button.attrs({
  okColor: '#fff',
  okBg: '#1195fd',
  okBorder: '#1d97d3',
  cancleColor: '#333',
  cancleBg: '#ddd',
  cancleBorder: '#cdc7c7',
}) `
  width: 120px;
  height: 40px;
  margin-left: 8px;
  color: ${
    props => props.type === 'ok' ? props.okColor : props.cancleColor
  };
  background-color: ${
    props => props.type === 'ok' ? props.okBg : props.cancleBg
  };
  border-radius: 2px;
  border: 1px solid #000;
  border-color: ${
    props => props.type === 'ok' ? props.okBorder : props.cancleBg
  };
`
const Cell = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #ddd;
  margin: 12px 8px 0 0;
  color: #666;
  cursor: pointer;
`

// all in js 理念；styled-components 库
export default class Modal extends PureComponent {
  render() {
    return (
      <MaskWrapper {...this.props} onClick={e => this.maskClick()}>
        <ModalWrapper onClick={e => e.stopPropagation()}>
          <div className="modalBar">
            <span>{this.props.modalTitle}</span>
            <CloseIcon onClick={e => this.maskClick()}>×</CloseIcon>
          </div>
          <ModalContent>
            {
              this.props.item.second_type_list?.map(v=> {
                return (
                  <Cell>
                    {v.name}
                  </Cell>
                )
              })
            }

          </ModalContent>
        
          <div className="modalFooter">
            <ModalBtn type='ok'>确定</ModalBtn>
            <ModalBtn type='cancle'>取消</ModalBtn>
          </div>


        </ModalWrapper>
      </MaskWrapper>
    );
  }
  maskClick() {
    this.props.closeModal();
  }
}
                 