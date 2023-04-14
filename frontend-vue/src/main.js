import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'  
import App from './App.vue'

import InicioComponent from './components/modules/app/inicio/InicioComponent.vue';
import ErrorComponent from './components/modules/app/error/ErrorComponent.vue';
import BlogComponent from './components/modules/administraciones/blog/BlogComponent.vue';
import FormularioComponent from './components/modules/administraciones/formulario/FormularioComponent.vue';
import PeliculasComponent from './components/modules/administraciones/peliculas/PeliculasComponent.vue';
import PaginaComponent from './components/modules/administraciones/pagina/PaginaComponent.vue';
import SearchComponent from './components/modules/administraciones/search/SearchComponent.vue';
import RedirectComponent from './components/modules/administraciones/search/modals/RedirectComponent.vue';
import ArticleComponent from './components/modules/administraciones/articles/modals/ArticleComponent.vue';
import ArticleCreate from './components/modules/administraciones/articles/modals/ArticleCreate.vue';
import ArticleUpdate from './components/modules/administraciones/articles/modals/ArticleUpdate.vue';

const routers = [  
  { path: '/inicio', name: 'InicioComponent', component: InicioComponent },
  { path: '/blog', name: 'BlogComponent', component: BlogComponent },
  { path: '/blog/articulo/:id', name: 'ArticleComponent', component: ArticleComponent },
  { path: '/blog/crear', name: 'ArticleCreate', component: ArticleCreate },
  { path: '/blog/editar/:id', name: 'ArticleUpdate', component: ArticleUpdate },  
  { path: '/formulario', name: 'FormularioComponent', component: FormularioComponent },
  { path: '/peliculas', name: 'PeliculasComponent', component: PeliculasComponent },
  { path: '/pagina/:id?', name: 'PaginaComponent', component: PaginaComponent },
  { path: '/buscar/:search', name: 'SearchComponent', component: SearchComponent },
  { path: '/redirect/:search', name: 'RedirectComponent', component: RedirectComponent },
  { path: '/', name: 'DefaultComponent', component: InicioComponent },
  { path: '/:catchAll(.*)', name: "ErrorComponent", component: ErrorComponent }  
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routers
});

createApp(App).use(router).mount('#app')
