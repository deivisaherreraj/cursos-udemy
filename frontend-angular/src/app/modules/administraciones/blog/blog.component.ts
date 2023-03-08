import { Component, OnInit } from '@angular/core';
import { Article } from '../articles/services/article';
import { ArticleService } from '../articles/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [
    ArticleService
  ]
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];
  
  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(response => {
      this.articles = response.articles;
    }, error => {
      console.log(error);
    });
  }
}
