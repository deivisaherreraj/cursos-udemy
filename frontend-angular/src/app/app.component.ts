import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    readonly translate: TranslateService,
    readonly titleService: Title
  ) {
    this.translate.setDefaultLang('es');
    this.translate.get('TextosAplicacion.PageTitle').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

  ngOnInit(): void {
    
  }
}
