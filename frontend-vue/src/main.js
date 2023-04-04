import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'  
import App from './App.vue'

import InicioComponent from './components/modules/app/inicio/InicioComponent.vue';

const routers = [
  { path: '/', name: 'InicioComponent', component: InicioComponent },
  { path: '/inicio', name: 'InicioComponent', component: InicioComponent }
  // { path: '/blog', component: BlogComponent },
  // { path: '/blog/articulo/:id', component: ArticleComponent },
  // { path: '/blog/crear', component: ArticleCreateComponent },
  // { path: '/blog/editar/:id', component: ArticleUpdateComponent },
  // { path: '/buscar/:search', component: SearchComponent },
  // { path: '/formulario', component: FormularioComponent },
  // { path: '/peliculas', component: PeliculasComponent },
  // { path: '/pagina', component: PaginaComponent },
  // { path: '/pagina/:code', component: PaginaComponent },
  // { path: '**', component: PaginaErrorComponent }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routers
});

createApp(App).use(router).mount('#app')
