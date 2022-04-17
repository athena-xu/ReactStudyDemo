import React,{Component} from 'react'
import '../styles/zhihuComp.css'

const data = [
  {
    id: 1,
    name: '许莱恩1',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'xulaien1'
  },
  {
    id: 2,
    name: '许莱恩2',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'xulaien2'
  },
  {
    id: 3,
    name: '奥利奥',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'aoliao'
  },
  {
    id: 4,
    name: '莱恩',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'laien'
  },
  {
    id: 5,
    name: '宝贝',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'baobei'
  },
  {
    id: 6,
    name: '傻猫',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'shamao'
  },
  {
    id: 7,
    name: '奥仔',
    bio: '好吃懒做小猫咪',
    imgUrl: './logo192.png',
    userIde: 'aozai'
  },
]

export default class ZhihuComp extends Component{
  constructor(props,context) {
    super(props);
    data.forEach(V => {
      V.choosed = false;
    })
    this.state = {
      listData: data,
      choosedList: [],
      filterText: ''
    }
  }

  search = (val = '') => {
    this.setState({
      filterText: val
    })
  }
  chooseHandler = (id) => {
    let has = this.state.listData.filter( v => v.id === id)
    if(!!has && has[0]) {
      has[0].choosed = !has[0].choosed
    }
    this.setState({
      choosedList: this.state.listData.filter( v => !!v.choosed)
    }, () => {
      // 可在setState 的回调函数中获取当前值
      console.log('回调中打印',this.state.choosedList)
    })
    // setState 异步操作
    console.log('打印',this.state.choosedList)
  }
  render() {
    return (
      <div className='zhihu-comp'>
        <ZhihuCompTop choosedList={this.state.choosedList} search={this.search}></ZhihuCompTop>
        <ListWrap filterText={this.state.filterText} showList={this.state.listData} chooseHandler={this.chooseHandler}></ListWrap>
      </div>
    )
  }
}

class ZhihuCompTop extends Component{
  constructor(props,context) {
    super(props)
  }
  search = (ele) => {
    this.props.search(ele.target.value)
  }
  render() {
    let str = ''
    this.props.choosedList.forEach(v => {
       str = str + v.name + '、'
    })
    return (
      <div className="zhihu-top">
        <span>您已经邀请{str.slice(0,str.length-1)}等{this.props.choosedList.length}人</span>
        <input type="text" placeholder='搜索你想邀请的人' onChange={this.search}/>
      </div>
    )
  }
}

class ListWrap extends Component{
  constructor(props,context) {
    super(props)
    this.state = {
      lists: []
    }
  }
  shouldComponentUpdate(nextProps,nextState) {
    if(this.props !== nextProps){
      this.props = nextProps;
      this.dataHandler()
      return true
    }else if(this.state !== nextState) {
      return true
    }
    return false
  }
  componentWillMount() {
    this.dataHandler()
  }
  dataHandler = () => {
    let listRows = []
    this.props.showList.forEach(v=> {
      if(v.name.indexOf(this.props.filterText) > -1) {
        listRows.push(<Row item={v} key={v.id} chooseHandler={this.props.chooseHandler}></Row>)
      }
    })
    this.setState({
      lists: listRows,
    })
  }
  render() {
    return (
      <div className="list-wrap">
        {this.state.lists}
      </div>
    )
  }
}

class Row extends Component{
  constructor(props,context) {
    super(props)
  }
  shouldComponentUpdate(nextProps,nextState) {
    this.props = nextProps
    return true
  }
  choose = () => {
    this.props.chooseHandler(this.props.item.id)
  }
  render() {
    return (
      <div className='row'>
        <div className="row-left">
          <img src={this.props.item.imgUrl} alt="" />
          <div className="msg">
            <span>{this.props.item.name}</span>
            <span>{this.props.item.bio}</span>
          </div>
        </div>
        <div className={`btn ${this.props.item.choosed ? 'btnActived' : ''}`} onClick={this.choose}>{this.props.item.choosed ? "取消邀请": "邀请回答"}</div>
      </div>
    )
  }
}