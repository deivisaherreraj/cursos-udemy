import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';

import Global from './../../../../app-config/Default';
import Sidebar from './../../../../layout/sidebar/Sidebar';

class ArticleCreate extends Component {
  state = {
    article: {},
    status: null,
    selectedFile: null
  };
  url = Global.url;

  titleRef = React.createRef();
  contentsRef = React.createRef();

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentsRef.current.value
      }
    });
  };

  fileChange = (event) => {
    this.setState({
      selectedFile: event.target.file[0]
    })
  };

  formSubmit = (e) => {
    e.preventDefault();
    let urlArticle = this.url + '/article';
    Axios.post(urlArticle, this.state.article).then(response => {
      this.setState({
        article: response.data.article,
        status: 'waiting'
      });
      let idArticle = response.article._id;
      let formData = new FormData();
      if (this.state.selectedFile !== null) {
        formData.append('file0', this.state.selectedFile, this.state.selectedFile.name);
        Axios.post('/article/upload/' + idArticle, formData).then(responseFile => {
          this.setState({
            article: responseFile.data.article,
            status: responseFile.data.status
          });
        });
      }      
    }).catch(function (error) {
      this.setState({
        article: {},
        status: error.status
      });
    });
  };

  render() {
    if (this.state.status === 'success') {
      return <Navigate to={'/blog'} />
    }
    return (
      <React.Fragment>
        <div className="center">
          <section id="content">
            <h1 className="subheader">Crear artículo</h1>
            <form className="mid-form" onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input type="text" name="title" id="title" ref={this.titleRef} onChange={this.changeState} required />
                <small>
                  El titulo es requerido
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="contents">Contenido</label>
                <textarea name="contents" id="contents" ref={this.contentsRef} onChange={this.changeState} required></textarea>
                <small>
                  El contenido es requerida
                </small>
              </div>

              <div className="form-group">
                <input type="file" name="file0" id="imagen" accept=".jpg, .jpeg, .png" aria-label="file0" onChange={this.fileChange} />                
              </div>

              <div className="clearfix"></div>
              <input type="submit" value="Crear" className="btn btn-success" />
            </form>
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default ArticleCreate;