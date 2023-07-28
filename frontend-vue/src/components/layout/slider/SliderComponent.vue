<template>
  <div id="slider" :class="{ 'slider-big': !size || size == 'big', 'slider-small': size == 'small' }">
    <h1>{{ defaultText }}</h1>
    <RouterLink to="blog" class="btn-white" v-if="isViewButton">Ir al blog</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "SliderComponent",
  props: {
    isViewButton: {
      type: Boolean
    },
    defaultText: {
      type: String
    },
    size: {
      type: String
    }
  },
  components: { RouterLink }
}
</script>