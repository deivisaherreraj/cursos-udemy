import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula/services/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']  
})
export class PeliculasComponent implements OnInit {
  peliculas: Array<Pelicula> = [];
  favorita!: Pelicula;

  constructor(
    
  ) {
    this.peliculas = [
      new Pelicula('Avatar 2 :: El Sentido del Agua', 2022, 'https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg'),
      new Pelicula('Black Panther :: Wakanda Forever', 2020, 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg'),
      new Pelicula('Ant Man y la Avispa :: Quantuman', 2023, 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/17/16739776681372.jpg')
    ];
  }

  ngOnInit(): void {

  }

  mostrarFavorito(event: any): void {
    this.favorita = event.pelicula;
  }
}
