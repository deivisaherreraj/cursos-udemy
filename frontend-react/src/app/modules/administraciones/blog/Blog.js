import React, { Component } from 'react';

import Sidebar from './../../../layout/sidebar/Sidebar';
import Slider from './../../../layout/slider/Slider';

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider nombre="Blog" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Blog</h2>
          </section>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;