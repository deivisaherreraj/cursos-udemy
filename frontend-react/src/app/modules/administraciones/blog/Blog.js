import React, { Component } from 'react';

import Articles from '../articles/Articles';
import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider nombre="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            <Articles />
          </div>
          <Sidebar viewBlog="true" />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;