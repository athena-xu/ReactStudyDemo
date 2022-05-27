import {Component} from 'react'
import '../styles/passVaule.css'
import '../styles/booksManagement.css'
import { moneyFormat} from '../utils/index'

export default class BooksManage extends Component{
  constructor() {
    super();
    this.state = {
      books: [
        {
          name: '算法导论',
          createDate: '2006-9',
          price: '85',
          count: 1,
        },
        {
          name: 'UNIX编程艺术',
          createDate: '2006-2',
          price: '59',
          count: 1,
        },
        {
          name: '编程珠玑',
          createDate: '2006-9',
          price: '39',
          count: 1,
        },
        {
          name: '代码大全',
          createDate: '2006-9',
          price: '128',
          count: 1,
        },
      ],
      columns: [
        {
          type: 'index',
          key: 'index',
          title: '序号',
          align: 'center',
          ellipsis: true,
          width: 50
        },
        {
          type: 'name',
          key: 'name',
          title: '书籍名称',
          align: 'center',
          ellipsis: true,
          width: 200
        },
        {
          type: 'createDate',
          key: 'createDate',
          title: '出版日期',
          align: 'center',
          ellipsis: true,
          width: 100
        },
        {
          type: 'price',
          key: 'price',
          title: '价格',
          align: 'center',
          ellipsis: true,
          width: 80,
          render: (ctx, id) => {
            return (
              <div>{moneyFormat(ctx.price,'￥')}</div>
            )
          }
        },
        {
          type: 'count',
          key: 'count',
          title: '购买数量',
          align: 'center',
          ellipsis: true,
          width: 120,
          render: (ctx,id) => {
            return (
              <div>
                <button disabled={ctx.count<=1} onClick={() => {this.decrement(ctx,id)}}>-</button>{ctx.count}
                <button onClick={() => {this.increment(ctx,id)}}>+</button>
              </div>
            )
          }
        },
        {
          type: 'del',
          key: 'del',
          title: '操作',
          align: 'center',
          ellipsis: true,
          width: 100,
          render: (ctx,id) => {
            return (
              <button onClick={() => {this.remove(ctx,id)}}>移除</button>
            )
          }
        },

      ]
    }
  }
  tableDom() {
    // let columnKeys = [];
    // columnKeys = this.state.columns.reduce((pre, item) => {
    //   // columnKeys.push(item.key)
    //   return pre.concat([item.key])
    // },[])
    // console.log('??',columnKeys)
    const totalPrice = this.state.books.reduce((pre, item) => {
      return pre + Number(item.price) * item.count
    }, 0)
    return (
      <div>
        <table className="borderSty bookTable" border="1">
          <thead>
            <tr>
              {
                this.state.columns.map(item => <th key={item.title} style={{width: item.width + 'px'}}>{item.title}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.state.books.map((item,id) => {
                return (
                  <tr key={id}>
                    {
                      this.state.columns.map((v,index) => {
                        if(v.key === 'index'){
                          return <td key={item.name+id+index}>{id+1}</td>
                        }else {
                          return <td key={item.name+id+index}>{
                              (v.render && v.render(item,id)) || item[v.key]
                            }</td>
                        }
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h3>总价格：￥{totalPrice.toFixed(2)}</h3>
      </div>
    )
  }
  noData() {
    return (
      <div>购物车为空~</div>
    )
  }
  render() {
    return (
      this.state.books.length ? this.tableDom() : this.noData()
    )
  }
  decrement(item, id) {
    const booksCopy = [...this.state.books];
    booksCopy[id].count -= 1;
    this.setState({
      books: booksCopy
    })
  }
  increment(item, id) {
    const booksCopy = [...this.state.books];
    booksCopy[id].count += 1;
    this.setState({
      books: booksCopy
    })
  }
  remove(item, id) {
    this.setState({
      books: this.state.books.filter(v => v.name !== item.name)
    })
  }
}