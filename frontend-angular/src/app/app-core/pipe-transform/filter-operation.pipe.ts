import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOperation'
})
export class FilterOperationPipe implements PipeTransform {
  operacionesJson: OperacionesJson[] = [];
  resultado!: string;
  contador!: number;
  
  transform(valor: string) {
    this.operacionesJson = JSON.parse(valor);
    this.resultado = '';
    this.contador = 0;
    this.operacionesJson.forEach(item => {
      if (this.contador > 0) {
        this.resultado = `${this.resultado} - ${item.operacion}`;
      } else {
        this.resultado = `${item.operacion}`;
      }
      this.contador = this.contador + 1;
    });
    return this.resultado;
  }
}
export interface OperacionesJson {
  id: number;
  operacion: string;
}