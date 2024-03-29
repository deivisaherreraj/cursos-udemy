import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from './services/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() eventFavorito = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  seleccionarPelicula(pelicula: Pelicula): void {
    this.eventFavorito.emit({
      pelicula: pelicula
    });
  }
}
