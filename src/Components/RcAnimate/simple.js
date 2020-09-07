import React from 'react';
import velocity from 'velocity-animate';
import Animate from 'rc-animate';

export default class App extends React.Component {

  state = {
    visible: true,
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  animateEnter = (node, done) => {
    let ok = false;

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    node.style.display = 'none';

    velocity(node, 'slideDown', {
      duration: 1000,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        complete();
      },
    };
  }


  animateLeave = (node, done) => {
    let ok = false;

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    node.style.display = 'block';

    velocity(node, 'slideUp', {
      duration: 1000,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        complete();
      },
    };
  }
  handleEnd = (key, exists) => {
    console.log('动画执行----key', key)
    console.log('动画执行----exists', exists)
  }


  render() {
    const { visible } = this.state
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    }
    return (
      <div>
        <div>简单动画</div>
        <div>
          <input type="checkbox" checked={visible} onChange={this.toggle} />
          {`${visible}`}
        </div>
        <Animate
          component=""
          showProp="data-show"
          animation={anim}
          onEnd={this.handleEnd}
        >
          <div data-show={visible} key='1' style={{ display: visible ? 'block' : 'none'}}>
            <div style={{ height: 40, border: '1px solid red', lineHeight: '40px', width: 200 }}>this is some words</div>
            <div style={{ width: 200, height: 180, backgroundColor: 'green' }}></div>
          </div>
        </Animate>
      </div>
    )
  }
}
