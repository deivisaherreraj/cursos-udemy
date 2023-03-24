import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert';

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

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
  }

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
      selectedFile: event.target.files[0]
    })
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let urlArticle = this.url + '/article';
      Axios.post(urlArticle, this.state.article).then(response => {
        this.setState({
          article: response.data.articleStored,
          status: 'waiting'
        });
        if (this.state.selectedFile !== null) {
          let idArticle = response.data.articleStored._id;
          let formData = new FormData();
          let urlImageArticle = this.url + '/article/upload/' + idArticle;

          formData.append('file0', this.state.selectedFile, this.state.selectedFile.name);

          Axios.post(urlImageArticle, formData).then(responseFile => {
            this.setState({
              article: responseFile.data.article,
              status: responseFile.data.status
            });
          });
        } else {
          this.setState({
            status: response.data.status
          });
        }
        Swal({
          title: "Articulo creado!",
          text: "El articulo se ha creado correctamente!",
          icon: response.data.status
        });
      }).catch(function (error) {
        this.setState({
          status: error.data.status
        });
        Swal({
          title: "Error al crear!",
          text: error.data.message,
          icon: error.data.status
        });
      });
    } else {
      this.setState({
        status: 'faild'
      });
      this.validator.showMessages();
      this.forceUpdate();
    }
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
                {this.validator.message('title', this.state.article.title, 'required|min:5|max:50')}
              </div>

              <div className="form-group">
                <label htmlFor="contents">Contenido</label>
                <textarea name="contents" id="contents" ref={this.contentsRef} onChange={this.changeState} required></textarea>
                {this.validator.message('contents', this.state.article.content, 'required|min:10|max:150')}
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