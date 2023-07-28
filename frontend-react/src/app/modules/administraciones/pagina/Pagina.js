import React, { Component } from 'react';

import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Pagina extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider nombre="Pagina" size="slider-small" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Pagina</h2>
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Pagina;