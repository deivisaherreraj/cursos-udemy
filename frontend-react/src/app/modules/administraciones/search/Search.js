import React, { Component } from 'react';

import Articles from '../articles/Articles';
import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Search extends Component {
  render() {
    let searched = this.props.match.params.search;
    return (
      <React.Fragment>
        <Slider nombre={"Busqueda: " + searched} size="slider-small" />
        <div className="center">
          <div id="content">
            <Articles searchArticle={searched} />
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;