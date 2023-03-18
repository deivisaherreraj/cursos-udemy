import React, { Component } from 'react';
import Pelicula from './modals/Pelicula';

class Peliculas extends Component {
  state = {
    favorita: null,
    peliculas: [
      { title: 'Avatar 2 :: El Sentido del Agua', year: 2022, image: 'https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg' },
      { title: 'Black Panther :: Wakanda Forever', year: 2020, image: 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg' },
      { title: 'Ant Man y la Avispa :: Quantuman', year: 2023, image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/17/16739776681372.jpg' }
    ]
  };

  mostrarFavorito = (pelicula) => {
    this.setState({
      favorita: pelicula
    })
  };

  render() {
    return (
      <section id="content">
        <h2 className="subheader">Peliculas</h2>
        {this.state.favorita &&
          <p className="article-item-favorite">
            <strong>Pelicula favorita: </strong>
            <span>{this.state.favorita?.title}</span>
          </p>
        }
        {
          this.state.peliculas.map((pelicula, index) => {
            return (
              <Pelicula key={index} index={index} pelicula={pelicula} seleccionarPelicula={this.mostrarFavorito} />
            )
          })
        }
      </section >
    );
  }
}

export default Peliculas;