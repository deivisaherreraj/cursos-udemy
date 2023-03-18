import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/inicio" activeClassName="active" >Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink>
              </li>
              <li>
                <NavLink to="/pagina" activeClassName="active">Pagina</NavLink>
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