<template>
  <section id="content">
    <h4 class="subheader">¡Uy! Esta página no se pudo encontrar</h4>
    <p>Lo sentimos, la página que está buscando no existe, se ha eliminado o se ha cambiado el nombre.</p>
    <RouterLink to='/inicio' class="btn-error btn-round">Ir a la página de inicio</RouterLink>
  </section>
</template>
<script>
export default {
  name: 'ErrorComponent'
}
</script>