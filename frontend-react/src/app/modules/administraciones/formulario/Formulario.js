import React, { Component } from 'react';

import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Formulario extends Component {
  nombresRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: null
  };

  formSubmit = (e) => {
    e.preventDefault();
    let generoChecked = 'hombre';
    if (this.generoHombreRef.current.checked) {
      generoChecked = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      generoChecked = this.generoMujerRef.current.value;
    } else if (this.generoOtroRef.current.checked) {
      generoChecked = this.generoOtroRef.current.value;
    }
    let user = {
      nombres: this.nombresRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: generoChecked
    };
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <React.Fragment>
        <Slider nombre="Formulario" size="slider-small" />
        <div className="center">
          <div id="content">
            <h2 className="subheader">Formulario</h2>
            {this.state.user &&
              <p className="article-item-favorite">
                <strong>Nombre: </strong>
                <span>{this.state.user.nombres}</span>
              </p>
            }
            <form className="mid-form" onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="nombres">Nombres</label>
                <input type="text" name="nombres" id="nombres" ref={this.nombresRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" id="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radiobuttons">
                <input type="radio" name="genero" value="hombre" aria-label="genero" ref={this.generoHombreRef} /> Hombre
                <input type="radio" name="genero" value="mujer" aria-label="genero" ref={this.generoMujerRef} /> Mujer
                <input type="radio" name="genero" value="otro" aria-label="genero" ref={this.generoOtroRef} /> Otro
              </div>
              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;