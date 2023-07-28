import React, { Component } from 'react';

import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

import Articles from './../../administraciones/articles/Articles';

class Inicio extends Component {  
  render() {
    return (
      <React.Fragment>
        <Slider nombre="Bienvenido al Curso de Angular" button="Ir al blog" size="slider-big" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Últimos artículos</h2>
            {/* Listado de articulos */}
            <div id="articles">
              <Articles lastArticles="true" />
            </div>            
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Inicio;