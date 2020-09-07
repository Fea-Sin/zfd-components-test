import React, { PureComponent } from 'react';
import './index.less';
// import './test.css';

export default class App extends PureComponent {
  
  render() {
    return (
      <div>
        <div>Home is here</div>
        <div className='test'>
          测试LESS，本工程项目并未开启LESS支持
          <div className='hello'>HELLO</div>
        </div>
      </div>
    )
  }
}
