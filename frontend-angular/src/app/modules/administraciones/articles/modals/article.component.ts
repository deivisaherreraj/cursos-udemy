import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/app-config/default';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [
    ArticleService
  ]
})
export class ArticleComponent implements OnInit {
  article!: Article;
  url!: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this._articleService.getArticleById(params['id']).subscribe(response => {
        if (!response.article) {
          this._router.navigate(['/inicio']);  
        }
        this.article = response.article;
      }, error => {
        this._router.navigate(['/inicio']);
      });
    });
  }

  deleteArticle(id: string): void {
    Swal({
      title: "¿Estas seguro?",
      text: "Una vez eliminado, no podrá recuperar el registro!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.deleteArticle(id).subscribe(response => {
          Swal("Su articulo ha sido eliminado!", {
            icon: response.status
          });
          this._router.navigate(['/blog']);
        }, error => {
          Swal("Error al eliminar!", {            
            icon: error.status
          });
          this._router.navigate(['/blog']);  
        });        
      }
    });    
  }
}
