import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'  
import App from './App.vue'

import InicioComponent from './components/modules/app/inicio/InicioComponent.vue';
import ErrorComponent from './components/modules/app/error/ErrorComponent.vue';
import BlogComponent from './components/modules/administraciones/blog/BlogComponent.vue';
import FormularioComponent from './components/modules/administraciones/formulario/FormularioComponent.vue';
import PeliculasComponent from './components/modules/administraciones/peliculas/PeliculasComponent.vue';
import PaginaComponent from './components/modules/administraciones/pagina/PaginaComponent.vue';

const routers = [  
  { path: '/inicio', name: 'InicioComponent', component: InicioComponent },
  { path: '/blog', name: 'BlogComponent', component: BlogComponent },
  { path: '/formulario', name: 'FormularioComponent', component: FormularioComponent },
  { path: '/peliculas', name: 'PeliculasComponent', component: PeliculasComponent },
  { path: '/pagina/:id?', name: 'PaginaComponent', component: PaginaComponent },
  { path: '/', name: 'DefaultComponent', component: InicioComponent },
  { path: '/:catchAll(.*)', name: "ErrorComponent", component: ErrorComponent }
  // { path: '/blog/articulo/:id', component: ArticleComponent },
  // { path: '/blog/crear', component: ArticleCreateComponent },
  // { path: '/blog/editar/:id', component: ArticleUpdateComponent },
  // { path: '/buscar/:search', component: SearchComponent },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routers
});

createApp(App).use(router).mount('#app')
