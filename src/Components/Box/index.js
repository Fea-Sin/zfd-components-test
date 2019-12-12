import React, { PureComponent } from 'react';
import './index.css';

export default class App extends PureComponent {

  render() {
    const { title, children, example } = this.props
    return (
      <div className='BoxFS'>
        <div className='BoxFS-code'>
          {children}
        </div>
        <div className='BoxFS-footer'>
          <div className='BoxFS-footer-case'>{example}</div>
          <div className='BoxFS-footer-title'>{title}</div>
        </div>
      </div>
    )
  }
}
