import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from 'src/app/app-config/default';

@Injectable()
export class ArticleService {
    url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getArticles(): Observable<any> {
        return this._httpClient.get(`${this.url}/articles`);
    }
}