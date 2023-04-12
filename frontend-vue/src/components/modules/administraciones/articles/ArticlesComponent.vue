<template>
  <div id="articles" v-if="articles && articles.length > 0">
    <article class="article-item" v-for="article in articles" v-bind:key="article._id">
      <div class="image-wrap">
        <img v-if="article.image" :src="url + '/article/imagen/' + article.image" :alt="article.title" />
        <img v-if="!article.image" src="./../../../../assets/images/default.jpg" alt="Image Default" />
      </div>
      <h2>{{ article.title }}</h2>
      <span class="date">
        {{ article.date }}
      </span>
      <RouterLink to="/blog/articulo">Leer más</RouterLink>
      <div class="clearfix"></div>
    </article>
  </div>
</template>
<script>
import Global from './../../../app-config/Default';

export default {
  name: 'ArticlesComponent',
  props: {
    articles: {
      type: Object
    }
  },
  data() {
    return {
      url: Global.url
    };
  }
}
</script>