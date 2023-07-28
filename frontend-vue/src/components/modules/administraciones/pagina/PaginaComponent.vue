<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Pagina'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina</h2>
        <h3>{{ code }}</h3>
        <button @click="updateCode()">Actualizar codigo</button>
        <button @click="redirectBlog()">Redirigir</button>

        <h2 class="subheader">Reactividad</h2>
        <input type="text" v-model="nombre" />
        Valor reactividad: <strong>{{ nombre }}</strong>
        <pre>
        {{ $data }}
      </pre>

        <h2 class="subheader">Directivas condicionales</h2>
        <input type="number" v-model="year" />
        <p class="alert-danger-temporary" v-if="year && year <= 2020">
          Valor año: <strong>{{ year }}</strong>
        </p>
        <p class="alert-success-temporary" v-else-if="year && (year >= 2021 && year <= 2023)">
          Valor año: <strong>{{ year }}</strong>
        </p>
        <p class="alert-warning-temporary" v-else>
          Valor año: <strong>{{ year }}</strong>
        </p>
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
  name: 'PaginaComponent',
  components: {
    SliderComponent,
    SidebarComponent
  },
  created() {
    console.log('Componente PaginaComponent fue creado con exito!');
  },
  mounted() {
    this.code = this.$route.params.id;
  },
  updated() {
    console.log('Componente PaginaComponent fue actualizado con exito!');
  },
  unmounted() {
    console.log('Componente PaginaComponent fue eliminado con exito!');
  },
  data() {
    return {
      code: null,
      nombre: null,
      year: 2023
    }
  },
  methods: {
    updateCode() {
      this.code = `Codigo: ${this.getNewGuid()}`;
    },
    redirectBlog() {
      this.$router.push('/blog');
    },
    getNewGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
}
</script>