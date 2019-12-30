import React, { PureComponent } from 'react';
import { Icon } from 'zfd';
import Box from '../Box';

export default class App extends PureComponent {

  render() {
    return (
      <div style={{ padding: 30 }}>
        <div>Icon is here</div>
        {/* 1. 基本 */}
        <Box
          example='基本'
          title='基本图标类型'
        >
          <Icon type='home' />
          <Icon type='home' theme='filled' style={{ marginLeft: 10 }} />
          <Icon type='home' theme='twoTone' style={{ marginLeft: 10 }} />
          <Icon type='home' style={{ color: 'green', marginLeft: 10 }} />
          <Icon type='home' theme='twoTone' twoToneColor='#61dafb' style={{ marginLeft: 10 }} />
        </Box>
      </div>
    )
  }
}
