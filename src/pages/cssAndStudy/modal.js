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

  hr{
    margin: 24px 0 30px;
  }
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
  cursor: pointer;
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
  padding: 6px 10px;
  border: 1px solid #ddd;
  margin: 12px 8px 0 0;
  border-radius: 2px;
  cursor: pointer;
  color: ${props => props.actived ? '#fff' : '#666'};
  background-color: ${props => props.actived ? '#298DFF' : '#fff'};
`

const BlueMark = styled.div`
  padding-left: 15px;
  border-left: 4px solid #298DFF;
  margin-bottom: 15px;
`
const FormItem = styled.div`
  margin: 12px 0;
  
  .label{
    width: 146px;
    display: inline-block;
    background: #f7f7f7;
    color: #495060;
    text-align: right;
    padding: 4px 14px;
    margin-right: 14px;
  }

  .value{
    color: #333;
  }
`

// all in js 理念；styled-components 库
export default class Modal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentSecItem: props.item?.second_type_list?.[0]
    }
  }
  render() {
    const detailCols = {
      name: '姓名',
      description: '简介',
      inpt_time: '创建时间'
    }

    return (
      <MaskWrapper {...this.props} onClick={e => this.maskClick()}>
        <ModalWrapper onClick={e => e.stopPropagation()}>
          <div className="modalBar">
            <span>{this.props.modalTitle}</span>
            <CloseIcon onClick={e => this.maskClick()}>×</CloseIcon>
          </div>
          <ModalContent>
            {
              this.props.item?.second_type_list.map(v=> {
                return (
                  <Cell key={v.report_second_type_id}
                        actived={v.report_second_type_id === this.state.currentSecItem?.report_second_type_id}
                        onClick={e => {this.setState({currentSecItem: v})}}>
                    {v.name}
                  </Cell>
                )
              })
            }
            <hr></hr>
            <div className="info">
              <BlueMark>详细信息</BlueMark>
                {
                  !!this.state.currentSecItem ? 
                    Object.keys(detailCols).map(v => {
                      return (
                        <FormItem>
                          <span className='label'>{detailCols[v]}</span>
                          <span className='value'>{this.state.currentSecItem?.[v]}</span>  
                        </FormItem>  
                      )
                    })
                  :
                    <span>暂无数据</span>
                }
            </div>


          </ModalContent>
        
          <div className="modalFooter">
            <ModalBtn type='ok' onClick={e => this.maskClick()}>确定</ModalBtn>
            <ModalBtn type='cancle' onClick={e => this.maskClick()}>取消</ModalBtn>
          </div>


        </ModalWrapper>
      </MaskWrapper>
    );
  }
  maskClick() {
    this.props.closeModal();
  }
}
                 