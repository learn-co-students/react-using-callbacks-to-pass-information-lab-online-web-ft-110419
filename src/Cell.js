import React, { Component } from 'react';

export default class Cell extends Component {
  
  state = {
    color: "#F00"
  }

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}