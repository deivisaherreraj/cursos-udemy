import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1>{this.props.nombre}</h1>
        {this.props.button && <Link to="/blog" className="btn-white">{this.props.button}</Link>}        
      </div>
    );
  }
}

export default Slider;