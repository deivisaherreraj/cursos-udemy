<template>
  <div class="general">
    <SliderComponent :isViewButton="true" :defaultText="'Bienvenido al Curso de Vue'" :size="'big'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">{{ paragraph }}</h2>
        <!-- Listado de articulos -->
        <div id="articles">
          <article class="article-item" id="article-template">
            <div class="image-wrap">
              <img
                src="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg"
                alt="Paisaje" />
            </div>
            <h2>Articulo de prueba</h2>
            <span class="date">
              Hace 5 minutos
            </span>
            <a href="#">Leer más</a>
            <div class="clearfix"></div>
          </article>
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

export default {
  name: 'InicioComponent',
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      paragraph: 'Últimos artículos'
    }
  }
}
</script>
