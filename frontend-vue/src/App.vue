<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>    
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/layout/header/HeaderComponent.vue';
import FooterComponent from './components/layout/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,  
    FooterComponent
  }
}
</script>

<style src="./assets/css/styles.css"></style>
