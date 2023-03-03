import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items) {
      return [];
    }
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.indexOf(filter) !== -1);
  }
}
