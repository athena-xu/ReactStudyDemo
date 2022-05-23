import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 150px);
  width: 400px;
  height: 300px;
  background-color: rgba(0,0,0,0.7);
`

// all in js 理念；styled-components 库
export default class Modal extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ModalWrapper>
        Modal弹窗
      </ModalWrapper>
    );
  }
}
                 