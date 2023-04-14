<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <RouterLink to="/blog/crear" class="btn btn-success">Crear artículo</RouterLink>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form @submit.prevent="submitToSearch()">
        <input type="text" name="search" aria-label="search" v-model="search" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      search: null
    }
  },
  methods: {
    submitToSearch() {
      this.$router.push('/redirect/' + this.search);
    }
  }
}
</script>