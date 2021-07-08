import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacityVal;
    { (this.props.opacity >= 0.2) ? opacityVal = <ColorBox opacity= { this.props.opacity - 0.1 } /> : opacityVal = null}

    return (
      <div className="color-box" style={{opacity: this.props.opacity }}>
        {opacityVal}
      </div>
    )
  }

}

