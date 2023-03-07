import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from 'src/app/app-config/default';
import { NamesIdentity } from 'src/app/app-core/core/enum/name.identity.enum';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css'],
  providers: [
    ArticleService
  ]
})
export class ArticleUpdateComponent implements OnInit {
  article!: Article;
  url!: string;
  idArticle!: string;
  afuConfigImage: any;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.cargarConfiguraciones();
    this.getArticle();
    this._activeRoute.params.subscribe((params: Params) => {
      this.idArticle = params['id'];
    });
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

  getArticle(): void {
    this._articleService.getArticleById(this.idArticle).subscribe(response => {
      this.article = response.article;
    });
  }

  onSubmit(): void {
    this._articleService.updateArticle(this.idArticle, this.article).subscribe(response => {
      this.article = response.article;
      Swal({
        title: "Articulo actualizado!",
        text: "El articulo se ha actualizado correctamente!",
        icon: response.status
      });
      this._router.navigate(['/blog/articulo', this.idArticle]);  
    }, error => {
      Swal({
        title: "Error al actualizar!",
        text: error.message,
        icon: error.status
      });
    });
  }
}
