import React from 'react';
import { SlideShow } from 'zfd';
import Box from '../Box';

export default class App extends React.Component {

  state = {
    open: false
  }
  handleChange = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <div style={{ padding: 30 }}>
        <Box
          example='基本'
          title='SlideShow组件基本使用'
        >
          <SlideShow
            title='测试展示'
            open={open}
            onChange={this.handleChange}
          >
            <div style={{
              width: 300,
              height: 180,
              border: '3px solid red',
              padding: 30,
            }}>
              动态内容
            </div>
          </SlideShow>
        </Box>
      </div>
    )
  }
}
