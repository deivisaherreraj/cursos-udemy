<template>
  <h1>Redirigiendo...</h1>
</template>
<script>
  export default {
  name: 'RedirectComponent',
  mounted() {
    this.$router.push('/buscar/' + this.$route.params.search);
  }
}
</script>