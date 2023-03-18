import React from 'react';

const Error = () => {
  return (
    <section id="content">
      <h4 className="subheader">¡Uy! Esta página no se pudo encontrar</h4>
      <p>Lo sentimos, la página que está buscando no existe, se ha eliminado o se ha cambiado el nombre.</p>
      <a className="btn-error btn-round">Ir a la página de inicio</a>
    </section>
  );
}

export default Error;