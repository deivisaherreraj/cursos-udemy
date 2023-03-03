import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { BlogComponent } from './modules/administraciones/blog/blog.component';
import { FormularioComponent } from './modules/administraciones/formulario/formulario.component';
import { PaginaComponent } from './modules/administraciones/pagina/pagina.component';
import { PeliculasComponent } from './modules/administraciones/peliculas/peliculas.component';
import { InicioComponent } from './modules/app/inicio/inicio.component';
import { PaginaErrorComponent } from './modules/app/pagina-error/pagina-error.component';

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