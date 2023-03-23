import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'react-moment';

import withRouter from './../../../../../withRouter';
import DefaultImage from './../../../../../assets/images/default.jpg';
import Global from './../../../../app-config/Default';
import Sidebar from './../../../../layout/sidebar/Sidebar';
import Slider from './../../../../layout/slider/Slider';

class Article extends Component {
  state = {
    article: null,
    status: null
  };  
  url = Global.url;

  constructor(props) {
    super(props);    
    this.getArticleById();
  }

  getArticleById = () => {
    let idArticle = this.props.params.id;
    let urlArticle = this.url + '/article/' + idArticle;

    Axios.get(urlArticle).then(response => {
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

  render() {
    let article = this.state.article;
    return (
      <React.Fragment>
        <Slider nombre="Articulo" size="slider-small" />
        <div className="center">
          <section id="content">
            {article &&
              <article className="article-item article-detail" id="article-detail">
                <div className="image-wrap">
                  {
                    article.image !== null ? (
                      <img src={this.url + '/article/imagen/' + article.image} alt={article.title} />
                    ) : (
                      <img src={DefaultImage} alt={article.title} />
                    )
                  }
                </div>
                <h1 className="subheader">{article.title}</h1>
                <span className="date">
                  <Moment locale='es' fromNow>{article.date}</Moment>
                </span>
                <p>
                  {article.content}
                </p>
                <div className="buttons">
                  <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                  <Link to={'#'} className="btn btn-danger">Borrar</Link>
                </div>
                <div className="clearfix"></div>
              </article>
            }
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Article);