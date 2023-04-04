<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <RouterView></RouterView>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/layout/header/HeaderComponent.vue';
import SliderComponent from './components/layout/slider/SliderComponent.vue';
import SidebarComponent from './components/layout/sidebar/SidebarComponent.vue';
import FooterComponent from './components/layout/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style src="./assets/css/styles.css"></style>
