import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public code!: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.code = params['code'];
    });
  }

  redireccionarPagina(): void {
    this._router.navigate(['/pagina', '0001']);
  }
}
