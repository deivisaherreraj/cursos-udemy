import React, { Component } from 'react';

import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Inicio extends Component {
  contador = 0;

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  Sumar = () => {
    this.setState({
      contador: (this.state.contador + 1)
    });
  }

  Restar = () => {
    this.setState({
      contador: (this.state.contador - 1)
    });
  }

  render() {
    return (
      <React.Fragment>
        <Slider nombre="Bienvenido al Curso de Angular" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Últimos artículos</h2>

            {/* Listado de articulos */}
            <div id="articles">
              <article className="article-item" id="article-template">
                <div className="image-wrap">
                  <img src="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg" alt="Paisaje" />
                </div>
                <h2>Articulo de prueba</h2>
                <span className="date">
                  Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <div className="clearfix"></div>
              </article>
            </div>
            <p>
              Contador {this.state.contador}
            </p>
            <p>
              <input type="button" value="Sumar" onClick={this.Sumar} />
              <input type="button" value="Restar" onClick={this.Restar} />
            </p>
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Inicio;