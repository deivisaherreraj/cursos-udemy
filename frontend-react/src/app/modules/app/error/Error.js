import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './../../../../app/layout/sidebar/Sidebar';

const Error = () => {
  return (
    <React.Fragment>
      <div className="center">
        <section id="content">
          <h4 className="subheader">¡Uy! Esta página no se pudo encontrar</h4>
          <p>Lo sentimos, la página que está buscando no existe, se ha eliminado o se ha cambiado el nombre.</p>
          <Link to={'/inicio'} className="btn-error btn-round">Ir a la página de inicio</Link>
        </section>
        <Sidebar />
      </div>
    </React.Fragment>
  );
}

export default Error;