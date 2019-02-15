import React, { Component } from 'react';
import './static/css/font-awesome.min.css';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <span>信息管理系统</span>
        </header>
        <BrowserRouter>
        <div>
          <div className="App-collapse"><i className="fa fa-angle-double-left"> </i></div>
          <div className="App-left">
              <ul>
                <NavLink to='/home' activeClassName="active"><li><i className="icon"></i>首页</li></NavLink>
                <li onClick={handleClick}>
                  <div className="nav-one active"><i className="icon fa fa-caret-down"> </i>一级菜单 </div>
                  <ul>
                    <NavLink to='/detail' activeClassName="active"><li>二级菜单</li></NavLink>
                    <NavLink to='/detail' activeClassName="active"><li>二级菜单</li></NavLink>
                    <NavLink to='/detail' activeClassName="active"><li>二级菜单</li></NavLink>
                  </ul>
                </li>
                <li onClick={handleClick}>
                  <div className="nav-one"><i className="icon fa fa-caret-right"> </i>一级菜单 </div>
                  <ul>
                    <li><Link to='/detail'>二级菜单</Link></li>
                    <li><Link to='/detail'>二级菜单</Link></li>
                    <li><Link to='/detail'>二级菜单</Link></li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className="App-right">
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/detail' component={Detail} />
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
