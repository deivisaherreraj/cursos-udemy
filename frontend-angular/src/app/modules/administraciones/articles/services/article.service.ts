import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from 'src/app/app-config/default';
import { Article } from './article';

@Injectable()
export class ArticleService {
    url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getArticles(last?: any): Observable<any> {        
        return this._httpClient.get(`${this.url}/articles${last ? '/' + last: ''}`);
    }

    getArticleById(id: string): Observable<any> {
        return this._httpClient.get(`${this.url}/article/${id}`);
    }

    searchArticle(search: any): Observable<any> {
        return this._httpClient.get(`${this.url}/article/search/${search}`);
    }

    saveArticle(article: Article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.post(`${this.url}/article`, params, { headers: headers });
    }
}