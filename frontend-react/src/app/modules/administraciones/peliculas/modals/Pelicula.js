import React, { Component } from 'react';

class Pelicula extends Component {
  seleccionarPelicula = () => {
    this.props.seleccionarPelicula(this.props.pelicula);
  };

  render() {
    const { title, year, image } = this.props.pelicula;
    return (
      <div id="articles">
        <article className="article-item" id={"article-template-" + this.props.index}>
          <div className="image-wrap">
            <img src={image} alt={title} />
          </div>
          <h2>{title}</h2>
          <span className="date">
            {year}
          </span>
          <a href="#">Leer más</a>
          <button onClick={this.seleccionarPelicula}>Seleccionar como favorita</button>
          <div className="clearfix"></div>
        </article>
      </div>
    );
  }
}

export default Pelicula