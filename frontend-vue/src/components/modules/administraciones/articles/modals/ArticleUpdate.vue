<template src="./../template/ArticleUpdate.html"></template>
<script>
import Axios from 'axios';
import Swal from 'sweetalert';

import Global from './../../../../app-config/Default';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import ArticleModel from './../services/ArticleModel';

import SidebarComponent from './../../../../layout/sidebar/SidebarComponent.vue';

export default {
  name: 'ArticleUpdate',
  components: {
    SidebarComponent
  },
  setup() {
    return { v$: useVuelidate() }
  },
  mounted() {
    this.idArticle = this.$route.params.id;
    this.getArticleById();
  },
  validations() {
    return {
      idArticle: null,
      article: {
        title: { required },
        content: { required }
      }
    }
  },
  data() {
    return {
      url: Global.url,
      article: new ArticleModel('', '', null, null),
      file: null
    };
  },
  methods: {
    getArticleById() {
      let urlArticle = this.url + '/article/' + this.idArticle;
      Axios.get(urlArticle).then(response => {
        this.article = response.data.article;
      }).catch(function () {
        this.article = new ArticleModel('', '', null, null);
      });
    },
    formSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let urlArticle = this.url + '/article/' + this.idArticle;
        Axios.put(urlArticle, this.article).then(response => {
          this.article = response.data.article;
          if (this.file !== null) {
            let idArticle = response.data.article._id;
            let formData = new FormData();
            let urlImageArticle = this.url + '/article/upload/' + idArticle;
            formData.append('file0', this.file, this.file.name);
            Axios.post(urlImageArticle, formData).then(responseFile => {
              this.article = responseFile.data.article;
            });
          }
          Swal({
            title: "Artículo actualizado!",
            text: "El artículo se ha actualizado correctamente!",
            icon: response.data.status
          });
          this.$router.push('/blog/articulo/' + this.idArticle);
        }).catch(function (error) {
          Swal({
            title: "Error al actualizar!",
            text: error.message,
            icon: error.status
          });
        });
      } else {
        Swal({
          text: 'Verifique que los campos requeridos esten diligenciados correctamente.',
          icon: 'warning'
        });
        return false;
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>