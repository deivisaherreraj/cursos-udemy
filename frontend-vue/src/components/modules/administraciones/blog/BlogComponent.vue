<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Blog'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <ArticlesComponent :articles="articles"></ArticlesComponent>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import Global from './../../../app-config/Default';

import SliderComponent from './../../../layout/slider/SliderComponent.vue';
import SidebarComponent from './../../../layout/sidebar/SidebarComponent.vue';
import ArticlesComponent from './../articles/ArticlesComponent.vue'

export default {
  name: 'BlogComponent',
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url: Global.url,
      status: null,
      articles: []
    };
  },
  methods: {
    getArticles() {
      let lastArticles = this.props.lastArticles;
      let searchedArticle = this.props.searchedArticle;
      let urlArticles = this.url + '/articles';

      if (lastArticles && !searchedArticle) {
        urlArticles += '/' + lastArticles;
      } else if (!lastArticles && searchedArticle) {
        urlArticles = this.url + '/article/search/' + searchedArticle;
      }

      Axios.get(urlArticles).then(response => {
        this.articles = response.data.articles;
      }).catch(function (error) {
        console.log(error);
        this.articles = [];
      });
    }
  }
}
</script>