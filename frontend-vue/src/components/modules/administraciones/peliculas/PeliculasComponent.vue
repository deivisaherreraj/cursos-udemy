<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Lista de Peliculas'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <p class="article-item-favorite" v-if="favorites">
          <strong>Pelicula favorita: </strong>
          <span>{{ capitalLetters(favorites.title) }}</span>
        </p>
        <div id="articles">
          <div v-for="movie in movies" v-bind:key="movie.title">
            <PeliculaComponent :movie="movie" @showFavoriteMovie="showFavoriteMovie"></PeliculaComponent>
          </div>
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import SliderComponent from './../../../layout/slider/SliderComponent.vue';
import SidebarComponent from './../../../layout/sidebar/SidebarComponent.vue';
import PeliculaComponent from './models/PeliculaComponent.vue';

export default {
  name: 'PeliculasComponent',
  components: {
    SliderComponent,
    SidebarComponent,
    PeliculaComponent
  },
  data() {
    return {
      favorites: null,
      movies: [
        { title: 'Avatar 2 :: El Sentido del Agua', year: 2022, image: 'https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg' },
        { title: 'Black Panther :: Wakanda Forever', year: 2020, image: 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg' },
        { title: 'Ant Man y la Avispa :: Quantuman', year: 2023, image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/17/16739776681372.jpg' }
      ]
    }
  },
  computed: {
    capitalLetters() {
      return (v) => {
        return v.toUpperCase()
      }
    }
  },
  methods: {
    showFavoriteMovie(movie) {
      this.favorites = movie;
    }
  }
}
</script>