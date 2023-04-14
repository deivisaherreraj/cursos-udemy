<template>
  <div class="general">
    <SliderComponent :isViewButton="true" :defaultText="'Bienvenido al Curso de Vue'" :size="'big'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">{{ paragraph }}</h2>
        <!-- Listado de articulos -->
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

import ArticlesComponent from './../../administraciones/articles/ArticlesComponent.vue';

export default {
  name: 'InicioComponent',
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
      paragraph: 'Últimos artículos',
      url: Global.url,
      status: null,
      articles: []
    }
  },
  methods: {
    getArticles() {      
      let urlArticles = this.url + '/articles/true';      
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
