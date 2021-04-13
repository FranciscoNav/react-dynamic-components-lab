import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
     if (this.props.opacity > 0.2 ){
      <div className="color-box" style={{opacity:0.2}}>
      <ColorBox opacity = {this.props.opacity} />
      </div>
     }else{ null }
    )
  }

}

