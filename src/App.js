import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link
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
        <div className="App-left">
            <ul>
              <li><Link to='/home'>关于</Link></li>
              <li><Link to='/detail'>主题列表</Link></li>
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

export default App;
