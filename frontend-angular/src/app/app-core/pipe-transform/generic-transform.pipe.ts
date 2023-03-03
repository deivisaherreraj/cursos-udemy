import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericTransform',
})
export class GenericTransformPipe implements PipeTransform {
  transform(valor: any, directiva: string = '') {
    if (directiva === 'currency') {
      const formatter = new Intl.NumberFormat('de-DE', {
        style: 'decimal',
        currency: 'USD',
        maximumFractionDigits: 2,
      });

      return formatter.format(valor);
    }

    return valor;
  }
}
