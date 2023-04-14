<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Busqueda: ' + searched" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Artículos encontrados</h2>
        <ArticlesComponent :articles="articles"></ArticlesComponent>
        <div v-if="articles.length <= 0">
          No hay resultados de la busqueda para los articulos registrados en el sistema.
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
  name: 'SearchComponent',
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted() {
    this.searched = this.$route.params.search;
    this.getArticlesBySearch();
  },
  data() {
    return {
      url: Global.url,
      searched: null,
      status: null,
      articles: []
    }
  },
  methods: {
    getArticlesBySearch() {
      let urlArticles = this.url + '/article/search/' + this.searched;
      Axios.get(urlArticles).then(response => {
        this.articles = response.data.articles;
      }).catch(function (error) {
        this.articles = [];
        this.status = error.data.status;
      });
    }
  }
}
</script>