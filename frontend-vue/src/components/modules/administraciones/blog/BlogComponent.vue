<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Artículos'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <ArticlesComponent :articles="articles"></ArticlesComponent>
        <div v-if="articles.length <= 0">
          No hay articulos registrados en el sistema.
        </div>
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
import ArticlesComponent from './../articles/ArticlesComponent.vue';

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
      let urlArticles = this.url + '/articles';
      Axios.get(urlArticles).then(response => {
        this.articles = response.data.articles;
      }).catch(function () {
        this.articles = [];
      });
    }
  }
}
</script>