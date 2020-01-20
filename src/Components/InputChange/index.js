import React, { PureComponent } from 'react';
import Box from '../Box';
import InputChange from 'cr-inputchange';
import 'cr-inputchange/assets/index.css';

export default class App extends PureComponent {

  doPost = (val) => {
    console.log('保存数据---', val)
  }

  render() {
    return (
      <div style={{ padding: 30 }}>
        <div>cr-inputchange</div>
        <Box
          example='基本'
          title='INPUT CHANGE'
        >
          <InputChange
            title='马斯克创造人类航天壮举'
            titleStyle={{fontSize: 30, color: '#873bf4'}}
            post={this.doPost}
          />
        </Box>
      </div>
    )
  }
}
