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
                <NavLink to="/inicio" className={({ isActive }) => isActive? "active": ''}>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({ isActive }) => isActive? "active": ''}>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario" className={({ isActive }) => isActive? "active": ''}>Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/peliculas" className={({ isActive }) => isActive? "active": ''}>Peliculas</NavLink>
              </li>
              <li>
                <NavLink to="/pagina" className={({ isActive }) => isActive? "active": ''}>Pagina</NavLink>
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