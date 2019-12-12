import React, { PureComponent } from 'react';
import { Alert } from 'zfd';
import '../../index.css';
import './index.css';
import Box from '../Box';

const onClose3 = (e) => {
  console.log(e, 'I was closed')
}

export default class App extends PureComponent {

  render() {
    return (
      <div className='con'>
        <div className='RowFS'>
          <div className='RowFS-col'>
            {/* 1. 基本 */}
            <Box
              example='基本'
              title='简单使用，展示信息'
            >
              <Alert type='success' message='成功引入' />
            </Box>
            {/* 3. 可关闭的警告提示 */}
            <Box
             example='可关闭的警告提示'
             title='显示关闭按钮，点击可关闭警告提示'
            >
              <Alert
                message='Warning Text Warning Text Warning Text'
                type='warning'
                closable
                onClose={onClose3}
              />
            </Box>
          </div>
          <div className='RowFS-col'>
            {/* 2. 四种样式 */}
            <Box
              example='四种样式'
              title='共有四种样式 success、 info、 warning、 error'
            >
              <Alert message='Success Text' type='success' />
              <Alert message='Info Text' type='info' />
              <Alert message='Warning Text' type='warning' />
              <Alert message='Error Text' type='error' />
            </Box>
          </div>
        </div>
      </div>
    )
  }
}
