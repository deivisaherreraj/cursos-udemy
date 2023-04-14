<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" id="article-detail">
          <div class="image-wrap">
            <img v-if="article.image" :src="url + '/article/imagen/' + article.image" :alt="article.title" />
            <img v-if="!article.image" src="./../../../../../assets/images/default.jpg" alt="Image Default" />
          </div>
          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">
            {{ dateTime(article.date) }}
          </span>
          <p>
            {{ article.content }}
          </p>
          <div class="buttons">
            <a @click="redirectUpdateArticle()" class="btn btn-warning">Editar</a>
            <a @click="deleteArticle()" class="btn btn-danger">Borrar</a>
          </div>
          <div class="clearfix"></div>
        </article>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Moment from 'moment';
import Axios from 'axios';
import Swal from 'sweetalert';
import Global from './../../../../app-config/Default';

import SidebarComponent from './../../../../layout/sidebar/SidebarComponent.vue';

export default {
  name: 'ArticleComponent',
  components: {
    SidebarComponent
  },
  mounted() {
    this.idArticle = this.$route.params.id;
    this.getArticleById();
  },
  data() {
    return {
      url: Global.url,
      idArticle: null,
      article: {}
    };
  },
  methods: {
    getArticleById() {
      let urlArticle = this.url + '/article/' + this.idArticle;
      Axios.get(urlArticle).then(response => {
        this.article = response.data.article;
      }).catch(function() {
        this.article = {};
      });
    },
    deleteArticle() {
      Swal({
        title: "¿Estas seguro?",
        text: "Una vez eliminado, no podrá recuperar el registro!",
        icon: "warning",
        buttons: [true, true],
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          let urlArticle = this.url + '/article/' + this.idArticle;
          Axios.delete(urlArticle).then(response => {
            this.article = response.data.article;
            Swal("Su articulo ha sido eliminado!", {
              icon: response.data.status
            });
            this.$router.push('/blog');
          }).catch(function (error) {
            this.article = {};
            Swal("Error al eliminar!", {
              icon: error.data.status
            });
          });
        }
      });
    },
    dateTime(value) {      
      return Moment(value, "YYYYMMDD").fromNow();
    },
    redirectUpdateArticle() {
      this.$router.push('/blog/editar/' + this.idArticle);
    }
  }
}
</script>