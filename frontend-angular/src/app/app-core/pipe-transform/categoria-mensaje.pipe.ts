import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaMensaje'
})
export class CategoriaMensajePipe implements PipeTransform {

  transform(valor: number) {
    switch (valor) {
    case 1: { return 'Error de negocio'; }
    case 2: { return 'Éxito'; }
    case 3: { return 'Información'; }
    case 4: { return 'Error del sistema'; }
    default: { return 'Categoría desconocida'; }
    }
  }
}
