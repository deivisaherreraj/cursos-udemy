import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert';

import DefaultImage from './../../../../../assets/images/default.jpg';
import withRouter from './../../../../../withRouter';
import Global from './../../../../app-config/Default';
import Sidebar from './../../../../layout/sidebar/Sidebar';

class ArticleUpdate extends Component {
  state = {
    article: {},
    status: null,
    selectedFile: null
  };
  url = Global.url;
  idArticle = null;

  titleRef = React.createRef();
  contentsRef = React.createRef();

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.idArticle = this.props.params.id;
    this.getArticleById();
  }

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentsRef.current.value,
        image: this.state.article.image
      }
    });
  };

  fileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  };

  getArticleById = () => {
    let urlArticle = this.url + '/article/' + this.idArticle;
    Axios.get(urlArticle).then(response => {
      console.log(response);
      this.setState({
        article: response.data.article,
        status: response.data.status
      });
    }).catch(function (error) {
      this.setState({
        article: {},
        status: error.data.status
      });
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let urlArticle = this.url + '/article/' + this.idArticle;
      Axios.put(urlArticle, this.state.article).then(response => {
        this.setState({
          article: response.data.article,
          status: 'waiting'
        });
        if (this.state.selectedFile !== null) {
          let idArticle = response.data.article._id;
          let formData = new FormData();
          let urlImageArticle = this.url + '/article/upload/' + idArticle;

          formData.append('file0', this.state.selectedFile, this.state.selectedFile.name);

          Axios.post(urlImageArticle, formData).then(responseFile => {
            this.setState({
              article: responseFile.data.article,
              status: 'update'
            });
          });
        } else {
          this.setState({
            status: 'update'
          });
        }
        Swal({
          title: "Articulo actualizado!",
          text: "El articulo se ha actualizado correctamente!",
          icon: response.data.status
        });
      }).catch(function (error) {
        this.setState({
          status: error.data.status
        });
        Swal({
          title: "Error al actualizar!",
          text: error.message,
          icon: error.status
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
    if (this.state.status === 'update') {
      return <Navigate to={'/blog'} />
    }
    return (
      <React.Fragment>
        <div className="center">
          <section id="content">
            <h1 className="subheader">Actualizar artículo</h1>
            <form className="mid-form" onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input type="text" name="title" id="title" defaultValue={this.state.article.title} ref={this.titleRef} onChange={this.changeState} required />
                {this.validator.message('title', this.state.article.title, 'required|min:5|max:50')}
              </div>

              <div className="form-group">
                <label htmlFor="contents">Contenido</label>
                <textarea name="contents" id="contents" defaultValue={this.state.article.content} ref={this.contentsRef} onChange={this.changeState} required></textarea>
                {this.validator.message('contents', this.state.article.content, 'required|min:10|max:1000')}
              </div>

              <div className="form-group">
                <div className="image-thumb">
                  {                    
                    this.state.article.image !== null ? (
                      <img src={this.url + '/article/imagen/' + this.state.article.image} alt={this.state.article.title} />
                    ) : (
                      <img src={DefaultImage} alt={this.state.article.title} />
                    )
                  }
                </div>
                <input type="file" name="file0" id="imagen" accept=".jpg, .jpeg, .png" aria-label="file0" onChange={this.fileChange} />
              </div>

              <div className="clearfix"></div>
              <input type="submit" value="Actualizar" className="btn btn-success" />
            </form>
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ArticleUpdate);