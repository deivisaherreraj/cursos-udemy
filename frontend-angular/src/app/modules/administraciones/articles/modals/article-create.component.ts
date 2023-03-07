import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/app-config/default';
import { NamesIdentity } from 'src/app/app-core/core/enum/name.identity.enum';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [
    ArticleService
  ]
})
export class ArticleCreateComponent implements OnInit {
  article!: Article;
  url!: string;
  afuConfigImage: any;

  constructor(
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.cargarConfiguraciones();
  }

  /**
   * Este método carga las configuraciones para exportar
   * @returs {*} 
   * @membersof ArticleCreateComponent
   * @author Deivis Andres Herrera Julio
   */
  cargarConfiguraciones() {
    this.afuConfigImage = {
      multiple: false,
      formatsAllowed: '.jpg,.png,.gif,.jpeg',
      maxSize: '50',
      uploadAPI: {
        url: `${this.url}/article/upload`,
        method: 'POST'
      },
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: NamesIdentity.CargaArchivoImage,
        resetBtn: NamesIdentity.Reiniciar,
        uploadBtn: NamesIdentity.Cargar,
        afterUploadMsg_success: NamesIdentity.CargaMensajeExitoso,
        afterUploadMsg_error: NamesIdentity.CargaMensajeError,
        sizeLimit: NamesIdentity.CargaLimitePeso
      } 
    };
  }

  /**
   * Este método se utiliza para cargar los documentos para exportar
   * @returs {*} 
   * @membersof ArticleCreateComponent
   * @param evento Object to return a value type any
   * @author Deivis Andres Herrera Julio
   */
  imgageUpload($event: any) {
    let response = JSON.parse($event.response);
    this.article.image = response.image;
  }

  onSubmit(): void {
    this._articleService.saveArticle(this.article).subscribe(response => {
      this.article = response.article;
      Swal({
        title: "Articulo creado!",
        text: "El articulo se ha creado correctamente!",
        icon: response.status
      });
      this._router.navigate(['/blog']);  
    }, error => {
      Swal({
        title: "Error al actualizar!",
        text: error.message,
        icon: error.status
      });
    });
  }
}
