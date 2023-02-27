import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pagina', component: PaginaComponent },
  { path: 'pagina/:code', component: PaginaComponent },
  { path: '**', component: PaginaErrorComponent }
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);