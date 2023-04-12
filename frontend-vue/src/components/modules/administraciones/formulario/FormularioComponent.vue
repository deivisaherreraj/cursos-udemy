<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Formulario'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
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
  name: 'FormularioComponent',
  components: {
    SliderComponent,
    SidebarComponent
  }
}
</script>