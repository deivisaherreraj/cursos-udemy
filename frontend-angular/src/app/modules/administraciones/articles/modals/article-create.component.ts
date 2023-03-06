import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

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
  status!: string;

  constructor(
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this._articleService.saveArticle(this.article).subscribe(response => {
      this.status = response.status;
      this.article = response.article;
      this._router.navigate(['/blog']);  
    }, error => {
      this.status = error.status;
    });
  }
}
