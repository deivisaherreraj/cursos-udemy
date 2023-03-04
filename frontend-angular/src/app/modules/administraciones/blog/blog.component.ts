import { Component, OnInit } from '@angular/core';
import { Article } from './services/article';
import { ArticleService } from './services/article.service';
import { Global } from '../../../app-config/default';

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
  url!: string;
  
  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(response => {
      this.articles = response.articles;
    }, error => {
      console.log(error);
    });
  }

}
