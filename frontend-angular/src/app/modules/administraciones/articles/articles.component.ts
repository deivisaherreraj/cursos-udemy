import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/app-config/default';
import { Article } from './services/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[] = [];
  url!: string;
  
  constructor() { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    
  }
}
