import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/app-config/default';
import { Article } from '../../administraciones/articles/services/article';
import { ArticleService } from '../../administraciones/articles/services/article.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [
    ArticleService
  ]
})
export class InicioComponent implements OnInit {
  articles: Article[] = [];
  
  constructor(
    private _articleService: ArticleService
  ) {
    
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(response => {
      this.articles = response.articles;
    }, error => {
      console.log(error);
    });
  }
}
