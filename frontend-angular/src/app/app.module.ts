import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing, AppRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SliderComponent } from './layout/slider/slider.component';

import { BlogComponent } from './modules/administraciones/blog/blog.component';
import { FormularioComponent } from './modules/administraciones/formulario/formulario.component';
import { PaginaComponent } from './modules/administraciones/pagina/pagina.component';
import { PeliculaComponent } from './modules/administraciones/pelicula/pelicula.component';
import { PeliculasComponent } from './modules/administraciones/peliculas/peliculas.component';
import { InicioComponent } from './modules/app/inicio/inicio.component';
import { PaginaErrorComponent } from './modules/app/pagina-error/pagina-error.component';

import { CustomPipePipe } from './app-core/pipe-transform/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    InicioComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PaginaErrorComponent,
    PeliculasComponent,
    PeliculaComponent,

    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
