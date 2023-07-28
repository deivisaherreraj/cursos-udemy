<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="movie.image" :alt="movie.title" :title="movie.title" />
    </div>
    <h2>{{ movie.title }}</h2>
    <span :class="{ 'year-green': movie.year > 2020, 'year-red': movie.year <= 2020 }">
      {{ movie.year }}
    </span>
    <RouterLink to="/blog">Leer más</RouterLink>
    <button @click=selectMovie(movie)>Seleccionar como favorita</button>
    <div class="clearfix"></div>
  </article>
</template>
<script>
export default {
  name: 'PeliculaComponent',
  props: {
    movie: {
      type: Object,
    }
  },
  methods: {
    selectMovie(movie) {
      this.$emit('showFavoriteMovie', movie);
    }
  }
}
</script>