import React, { Component } from 'react';
import './static/css/font-awesome.min.css';
import './static/css/App.css';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Category from './pages/category';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHide:false//左侧导航是否隐藏
    };
  }
  toggleNav(){//显示隐藏导航
    this.setState({navHide:!this.state.navHide});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>信息管理系统</span>
        </header>
        <BrowserRouter>
        <div className={(this.state.navHide) ? "nav-hide" : "nav-show"}>
          <div className="App-collapse" onClick={this.toggleNav.bind(this)}>
              <i className={(this.state.navHide) ? "fa fa-angle-double-right" : "fa fa-angle-double-left"}></i>
          </div>
          <div className="App-left" style={{width: (this.state.navHide) ? "0" : "180px"}}>
              <ul>
                <NavLink to='/home' activeClassName="active"><li><i className="icon"></i>首页</li></NavLink>
                <li onClick={handleClick}>
                  <div className="nav-one active"><i className="icon fa fa-caret-down"> </i>商品管理 </div>
                  <ul>
                    <NavLink to='/detail' activeClassName="active"><li>上架商品</li></NavLink>
                    <NavLink to='/detail' activeClassName="active"><li>未上架商品</li></NavLink>
                    <NavLink to='/category' activeClassName="active"><li>商品分类</li></NavLink>
                  </ul>
                </li>
                <li onClick={handleClick}>
                  <div className="nav-one active"><i className="icon fa fa-caret-right"> </i>订单管理 </div>
                  <ul>
                    <li><Link to='/detail'>全部订单</Link></li>
                    <li><Link to='/detail'>待付款</Link></li>
                    <li><Link to='/detail'>已完成</Link></li>
                    <li><Link to='/detail'>已关闭</Link></li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className="App-right" style={{left: (this.state.navHide) ? "0" : "180px"}}>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/detail' component={Detail} />
            <Route exact path='/category' component={Category} />
          </div>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
function handleClick(e) {//菜单的下拉收起
  var classNameStr=e.target.className
  if(classNameStr.indexOf("nav-one")===0){
     if(classNameStr.indexOf("active")>0){
        e.target.className="nav-one";
        e.target.firstChild.className="icon fa fa-caret-right"
     }else{
        e.target.className="nav-one active";
        e.target.firstChild.className="icon fa fa-caret-down"
     }
  };
}
export default App;
