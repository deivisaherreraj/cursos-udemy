import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'react-moment';

import DefaultImage from './../../../../assets/images/default.jpg';
import Global from './../../../app-config/Default';

class Articles extends Component {
  state = {
    articles: [],
    status: null
  };
  url = Global.url;


  componentWillUnmount() {
    let lastArticles = this.props.lastArticles;
    let searchedArticle = this.props.searchArticle;
    let urlArticles = this.url + '/articles';
    if (lastArticles && !searchedArticle) {
      urlArticles += '/' + lastArticles;
    } else if (!lastArticles && searchedArticle) {
      urlArticles = this.url + '/article/search/' + searchedArticle;
    }
    this.getArticles(urlArticles);
  }

  getArticles = (urlArticles) => {
    Axios.get(urlArticles).then(response => {
      this.setState({
        articles: response.articles,
        status: response.status
      });
    }).catch(function (error) {
      console.log(error);
      this.setState({
        articles: [],
        status: error.status
      });
    });
  }

  render() {
    if (this.state.articles.length > 0 && this.state.status === 'success') {
      let listArticles = this.state.articles.map((article) => {
        return (
          <article key={article._id} className="article-item" id={"article-template-" + article._id}>
            <div className="image-wrap">
              {
                article.image !== null ? (
                  <img src={this.url + '/article/imagen/' + article.image} alt={article.title} />
                ) : (
                  <img src={DefaultImage} alt={article.title} />
                )
              }
            </div>
            <h2>{article.title}</h2>
            <span className="date">
              <Moment locale='es' fromNow>{article.date}</Moment>
            </span>
            <Link to={'/blog/articulo/' + article._id}>Leer más</Link>
          </article>
        );
      });
      return (
        <div id="articles">
          {listArticles}
        </div>
      );
    } else {
      return (
        <div id="articles" className="loading">
          <h2 className='subheader'>No hay articulos para mostrar</h2>
        </div>
      );
    }
  }
}

export default Articles;