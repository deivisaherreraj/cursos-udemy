import React, { Component } from 'react';
import logo from './../../../assets/images/react.png';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>
          {/* MENU */}
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="form.html">Formulario</a>
              </li>
              <li>
                <a href="">Pagina 1</a>
              </li>
              <li>
                <a href="#">Pagina 2</a>
              </li>
            </ul>
          </nav>
          {/* LIMMPIAR FLOTADO */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;