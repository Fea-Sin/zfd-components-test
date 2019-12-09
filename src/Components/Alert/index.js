import React, { PureComponent } from 'react';
import { Alert } from 'zfd';

export default class App extends PureComponent {
  
  render() {
    return (
      <div>
        <div>Alert is here</div>
        <Alert type='success' message='成功引入' />
      </div>
    )
  }
}
