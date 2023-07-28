<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="./../../../assets/images/vue.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>Curso</strong>Vue
        </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <RouterLink to="/inicio" active-class="active">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" active-class="active">Blog</RouterLink>
          </li>
          <li>
            <RouterLink to="/formulario" active-class="active">Formulario</RouterLink>
          </li>
          <li>
            <RouterLink to="/peliculas" active-class="active">Peliculas</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: 'pagina', name: 'PaginaComponent', params: { id: 'Soy el valor desde un parametro' } }" active-class="active">Pagina</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- LIMMPIAR FLOTADO -->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>