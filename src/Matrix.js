import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor 
    })
  }
  
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />) /* Cell is responsible for updating a cell div with a different color*/
  ) /* Cell returns a div with a color specific from this.props.values */
  /* When state is updated, Cell can return a div clicked on with the updated state style of: style={{backgroundColor: this.state.color} */

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} /> {/* We create a new ColorSelector component and pass down the method setSelectedColor to ColorSelector */}
        <div id="matrix"> {/* Color Selector returns two divs: First div("colorSelector") and another div inside of that div that sets state onClick.*/}
          {this.genMatrix()} {/* We then create a div inside of the first div "app" with an id of matrix and call this.genMatrix()*/}
        </div>
      </div> 
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}