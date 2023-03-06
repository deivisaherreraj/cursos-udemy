import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing, AppRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
import { ArticlesComponent } from './modules/administraciones/articles/articles.component';
import { ArticleComponent } from './modules/administraciones/articles/modals/article.component';
import { ArticleCreateComponent } from './modules/administraciones/articles/modals/article-create.component';
import { PaginaErrorComponent } from './modules/app/pagina-error/pagina-error.component';
import { SearchComponent } from './modules/administraciones/search/search.component';

import { CustomPipePipe } from './app-core/pipe-transform/custom-pipe.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MomentModule } from 'ngx-moment';

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
    ArticlesComponent,
    ArticleComponent,
    ArticleCreateComponent,
    SearchComponent,

    CustomPipePipe    
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
