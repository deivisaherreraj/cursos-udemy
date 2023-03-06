import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../articles/services/article';
import { ArticleService } from '../articles/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    ArticleService
  ]
})
export class SearchComponent implements OnInit {
  articles!: Article[];
  search!: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.search = params['search'];
      this._articleService.searchArticle(this.search).subscribe(response => {        
        this.articles = response.articles;
      }, error => {
        this.articles = [];
      });
    });
  }
}
