import React, { Component } from 'react';

class Inicio extends Component {
  render() {
    return (
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
      </section>
    );
  }
}

export default Inicio;