import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './app/layout/header/Header';
import Footer from './app/layout/footer/Footer';

import Inicio from './app/modules/app/inicio/Inicio';
import Error from './app/modules/app/error/Error';
import Pelicula from './app/modules/administraciones/peliculas/Peliculas';
import Blog from './app/modules/administraciones/blog/Blog';
import Formulario from './app/modules/administraciones/formulario/Formulario';
import Pagina from './app/modules/administraciones/pagina/Pagina';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/inicio' element={<Inicio />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/formulario' element={<Formulario />} />
          <Route exact path='/peliculas' element={<Pelicula />} />
          <Route exact path='/pagina' element={<Pagina />} />
          <Route path='*' element={<Error />} />
        </Routes>        
        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routing;