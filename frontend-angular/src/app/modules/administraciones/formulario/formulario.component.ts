import { Component, OnInit } from '@angular/core';
import { User } from './services/user';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  user!: User;

  constructor() {
    this.user = {
      nombres: '',
      apellidos: '',
      bio: '',
      genero: '',
    }
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.user);
  }
}
