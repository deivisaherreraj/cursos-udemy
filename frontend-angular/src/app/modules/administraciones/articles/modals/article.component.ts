import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/app-config/default';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

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
}
