import React, { PureComponent } from 'react';
// css 文件方式
import "./style/home.css"
import HomeSty from './style/home.module.css'
import Modal from './modal'


export default class CSSHome extends PureComponent {
  constructor() {
    super();
    this.state = {
      showModal:false,
      showTipId: null,
      currentItem: null,
      reportType: [
        {
          "report_first_type_id": "117bd33a4eb64392a1368ccfc268858d",
          "description": "公司研究描述",
          "name": "公司研究",
          "inpt_time": "2021-01-18 17:49:06",
          "second_type_list": [
              {
                  "report_second_type_id": "865153b1312140489a79dd2a95aaed93",
                  "description": "投资建议书",
                  "name": "推荐建议书",
                  "inpt_time": "2021-01-18 17:49:09",
                  "email_notifier": "l1",
              },
              {
                  "report_second_type_id": "ad2f3484fc714478808c42d6397bad70",
                  "description": "公司入库报告",
                  "name": "公司入库报告",
                  "inpt_time": "2021-01-18 17:49:08",
                  "email_notifier": "l1",
              },
              {
                  "report_second_type_id": "deebebafb4954f89992140ac0d0da2a0",
                  "description": "公司定期点评报告",
                  "name": "公司定期点评报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": "ceshi1",
              },
              {
                  "report_second_type_id": "9a2edaeecdb3400b9a97b5567ba1ba5a",
                  "description": "公司深度报告",
                  "name": "公司深度报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "888a3d48da444d518945aaed4b8dcebd",
                  "description": "公司调研报告",
                  "name": "公司调研报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "e3dbffce5f0a48998dd302d56135a6ba",
                  "description": "新股定价报告",
                  "name": "新股定价报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "e06221f9dbe647b1929dc13de40a5b44",
                  "description": "港股研究",
                  "name": "港股研究",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "25960d44e7744b31a731d8e68d7a949b",
                  "description": "预测评级汇总",
                  "name": "预测评级汇总",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              }
          ]
      },
      {
          "report_first_type_id": "47e170d6b0744d05a602e57ff4ab7f32",
          "description": "行业研究描述",
          "name": "行业研究",
          "inpt_time": "2021-01-18 17:49:06",
          "second_type_list": [
              {
                  "report_second_type_id": "779f5747a0464ee69335a1467f510a32",
                  "description": null,
                  "name": "行业研究",
                  "inpt_time": "2021-05-12 15:36:59",
                  "email_notifier": "l1",
              },
              {
                  "report_second_type_id": "7627ff8c09a84bc0a3ee1814b6b210a3",
                  "description": "公司定期报告",
                  "name": "公司定期报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "50b018529c99490894efef5844e2f58c",
                  "description": "行业点评报告",
                  "name": "行业点评报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "4223bfcd733445c1be01647971419136",
                  "description": "行业定期报告",
                  "name": "行业定期报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "0ce0b16ff5574d4680bd54d89f5e2f2b",
                  "description": "行业深度报告",
                  "name": "行业深度报告",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "88409972038543648b95180f71c41e62",
                  "description": "行业调研",
                  "name": "行业调研",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              },
              {
                  "report_second_type_id": "62da887d93b140d1a7c337968f9498cd",
                  "description": "行业数据",
                  "name": "行业数据",
                  "inpt_time": "2021-01-18 17:49:06",
                  "email_notifier": null,
              }
          ]
      },
      {
        "report_first_type_id": "9fc99a3efe5a4ac8be9ff61ff51bd32a",
        "description": "债券研究描述",
        "name": "债券研究",
        "inpt_time": "2021-01-18 17:49:06",
        "second_type_list": [
            {
                "report_second_type_id": "8e08032ab52046808d2448a66d36d4c0",
                "description": null,
                "name": "多个债券",
                "inpt_time": "2022-04-27 09:09:24",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "afe22b4e49f5427f9983ad87d201409e",
                "description": null,
                "name": "债券",
                "inpt_time": "2021-03-31 09:48:51",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "287f39858149499eb61267d583ec4f31",
                "description": "债券入库报告",
                "name": "债券入库报告",
                "inpt_time": "2021-01-18 17:49:08",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "be1g2393gd603389919d35e7408cbe81",
                "description": "债券主体入库报告",
                "name": "债券主体入库报告",
                "inpt_time": "2021-01-18 17:49:08",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "a7576f6941b84c9988c9ccaedf1063a8",
                "description": "主体研究",
                "name": "主体研究",
                "inpt_time": "2021-01-18 17:49:06",
                "email_notifier": null,
            }
        ]
    },
    {
        "report_first_type_id": "c736c567efcc45e4bafcb296c1448682",
        "description": "基金研究描述",
        "name": "基金研究",
        "inpt_time": "2021-01-18 17:49:06",
        "second_type_list": [
            {
                "report_second_type_id": "de02d22fb439497d9e023c66270a4bbb",
                "description": "基金入库报告",
                "name": "基金入库报告",
                "inpt_time": "2021-01-18 17:49:08",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "4032b952aa1141edab3faf393ee368e0",
                "description": "新发基金",
                "name": "新发基金",
                "inpt_time": "2021-01-18 17:49:06",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "4ae32085f9774e0eae665375cae9fef1",
                "description": "封闭式基金",
                "name": "封闭式基金",
                "inpt_time": "2021-01-18 17:49:06",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "b01495a6e6c84a5ea39606c583cfa954",
                "description": "开放式基金",
                "name": "开放式基金",
                "inpt_time": "2021-01-18 17:49:06",
                "email_notifier": null,
            },
            {
                "report_second_type_id": "ae2d11592615417a803749a94d979e97",
                "description": "社保基金",
                "name": "社保基金",
                "inpt_time": "2021-01-18 17:49:06",
                "email_notifier": null,
            }
        ]
    },
      ]
    }
  }
  render() {
    const {reportType, showTipId, currentItem, showModal} = this.state;
    return (
      <div className='cssHome'>
        {
          reportType.map(v => {
            return (
              // 行 内联样式
              <div key={v.report_first_type_id} style={{flex: 1, cursor: 'pointer' }}>
                <span className={HomeSty.title} 
                      onMouseOver={() => { this.hoverChange(v.report_first_type_id) }} 
                      onMouseOut={() => { this.hoverChange(null)}}
                      onClick={() => { this.clickItem(v)}}>
                  {v.name}
                  </span>
                <div className={[HomeSty.tip, showTipId === v.report_first_type_id ? HomeSty.tipHover: ''].join(' ')}>
                  <span className={HomeSty.desc}>简介：{v.description}</span>
                  <span className={HomeSty.createTime}>创建日期：{v.inpt_time}</span>
                </div>
              </div>
            )
          })
        }
        <Modal 
          show={showModal} 
          item={currentItem} 
          modalTitle={currentItem?.name + '的二级研报类型'}
          closeModal={() => {this.setState({showModal: !showModal})}}/>
      </div>
    )
  }
  hoverChange(id) {
    this.setState({
      showTipId: id
    })
  }
  clickItem(item) {
    this.setState((prev,props) => {
      return {
        currentItem: item,
        showModal: true
      }
    })
  }
}
