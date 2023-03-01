import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

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

  seleccionarPelicula(event: any, pelicula: Pelicula): void {
    this.eventFavorito.emit({
      pelicula: pelicula
    });
  }
}
