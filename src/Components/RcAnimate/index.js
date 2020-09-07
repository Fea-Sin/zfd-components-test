import React from 'react';
import Box from '../Box';
import Animate from 'rc-animate';
import CSSMotion from 'rc-animate/lib/CSSMotion';
import classNames from 'classnames';
import Simple from './simple';

import './slow.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.DEMO = React.createRef()
  }

  state = {
    enter: false,
    caseTwo: false,
    caseThree: true,
    caseThreed: true,
    caseFour: false,
    caseFive: false,
  }
  toggleClick = () => {
    this.setState({
      enter: !this.state.enter
    })
  }
  caseTwoClick = () => {
    this.setState({
      caseTwo: !this.state.caseTwo
    })
  }
  caseThreeClick = () => {
    this.setState({
      caseThree: !this.state.caseThree
    })
  }
  caseThreeEnd = () => {
    console.log('动画结束---')
    this.setState({
      caseThreed: false
    })
  }
  onCollapse = () => ({ height: 0 })
  skipColorTransition = (_, event) => {
    // console.log('这里的event---', event)
    // CSSMotion support multiple transition.
    // You can return false to prevent motion end when fast transition finished.
    if (event.propertyName === 'background-color') {
      return false;
    }
    return true;
  };
  caseFourClick = () => {
    this.setState({
      caseFour: !this.state.caseFour
    })
  }
  caseFourTest = () => {
    console.log('dome----', this.DEMO.current)
  }

  caseFiveClick = () => {
    this.setState({
      caseFive: !this.state.caseFive
    })
  }

  componentDidMount() {
    // this.DEMO.current.style.height = '600px';
  }

  render() {


    const {
      //eslint-disable-next-line
      enter, caseTwo, caseThree, caseThreed, caseFour,caseFive
    } = this.state

    return (
      <div style={{ padding: 30 }}>
        <div>rc-animate is here</div>
        {/* 1. 基本 */}
        <Box
          example='基本'
          title='rc-animate 动画，对于简化的形式还是有一定问题'
        >
          <div 
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.toggleClick}
          >TOGGLE</div>
          <div>测试rc-animate</div>
          <Animate
            component=''
            transitionName='fade'
          >
            {
              enter &&
              <div style={{
                display: enter ? 'block' : 'none',
                width: 200,
                height: 200,
                backgroundColor: 'red',
              }}></div>
            }
          </Animate>
        </Box>
        {/* 2. 测试二 */}
        <Box
          example='测试二'
          title='rc-animate 动画'
        >
          <div 
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.caseTwoClick}
          >TOGGLE</div>
          <div>测试caseTwo444</div>
          <Animate
            component=''
            showProp='data-show'
            transitionName='fade'
            exclusive={true}
          >
            <div data-show={caseTwo} key='1' style={{
              display: caseTwo ? 'block' : 'none',
              width: 200,
              height: 100,
              backgroundColor: 'red',
            }}>1</div>
            <div data-show={caseTwo} key='2' style={{
              display: caseTwo ? 'block' : 'none',
              width: 200,
              height: 100,
              backgroundColor: 'red',
            }}>2</div>
          </Animate>
        </Box>
        {/* 3. 测试三 */}
        <Box
          example='测试三'
          title='尝试其他动画'
        >
          <div
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.caseThreeClick}
          >TOGGLE {`${caseThree}`}</div>
          <div>测试caseThree</div>
          <div style={{height: 100}}>
            <Animate
              component=''
              showProp='data-show'
              transitionName='demo-slide-up'
              onEnd={this.caseThreeEnd}
            >  
              <div
                data-show={caseThree}
                style={{
                  display: caseThreed ? 'block' : 'none',
                  width: 200,
                  height: 100,
                  backgroundColor: 'red',
                }}
              ></div>
            </Animate>
          </div>
        </Box>
        {/* 4. 测试四 */}
        <Box
          example='测试四'
          title='rc-animate 动画 CSSMotion'
        >
          <div
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.caseFourClick}
          >TOGGLE</div>
          <div
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.caseFourTest}
          >此时的DOM</div>
          <div>with Transition css</div>
          <CSSMotion
            visible={caseFour}
            motionName='transition'
            leavedClassName='hidden'
            onAppearStart={this.onCollapse}
            onEnterStart={this.onCollapse}
            onLeaveActive={this.onCollapse}
            // onEnterEnd={this.skipColorTransition}
            // onLeaveEnd={this.skipColorTransition}
            removeOnLeave={false}
            ref={this.DEMO}
          >
            {({ style, className }, ref) => (
              <div ref={ref} className={classNames('demo-block', className)} style={style}>
                <div style={{width: 400,  height: 400}}></div>
              </div>
            )}
          </CSSMotion>
        </Box>
        {/* 5. 测试五 */}
        <Box
          example='测试五'
          title='rc-animate 动画 CSSMotion'
        >
          <div
            style={{width: 150, height: 30, lineHeight: '30px', cursor: 'pointer'}}
            onClick={this.caseFiveClick}
          >TOGGLE</div>
          <div>with animate class</div>
          <CSSMotion
            visible={caseFive}
            motionName='animation'
          >
            {({ style, className }) => (
              <div className={classNames('demo-block', className)} style={style} />
            )}
          </CSSMotion>
        </Box>
        <Box
          example='融合动画测试'
          title='velocity animate'
        >
          <Simple />
        </Box>
      </div>
    )
  }
}
