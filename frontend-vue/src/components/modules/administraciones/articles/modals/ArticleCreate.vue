<template src="./../template/ArticleCreate.html"></template>
<script>
import Axios from 'axios';
import Swal from 'sweetalert';

import Global from './../../../../app-config/Default';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import ArticleModel from './../services/ArticleModel';

import SidebarComponent from './../../../../layout/sidebar/SidebarComponent.vue';

export default {
  name: 'ArticleCreate',
  components: {
    SidebarComponent
  },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
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
    formSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let urlArticle = this.url + '/article';
        Axios.post(urlArticle, this.article).then(response => {
          this.article = response.data.articleStored;
          if (this.file !== null) {
            let idArticle = response.data.articleStored._id;
            let formData = new FormData();
            let urlImageArticle = this.url + '/article/upload/' + idArticle;
            formData.append('file0', this.file, this.file.name);
            Axios.post(urlImageArticle, formData).then(responseFile => {
              this.article = responseFile.data.article;
            });
          }
          Swal({
            title: "Articulo creado!",
            text: "El articulo se ha creado correctamente!",
            icon: response.data.status
          });
          this.$router.push('/blog');
        }).catch(function (error) {
          Swal({
            title: "Error al crear!",
            text: error.data.message,
            icon: error.data.status
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