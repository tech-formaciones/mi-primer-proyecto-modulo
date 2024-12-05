import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: any, fieldName: string = '', order: 'asc' | 'des' = 'asc'): any {
    if(!value) return '';

    value.sort((a: any, b: any) => {
      if(a[fieldName] > b[fieldName]) return (order == 'asc' ? 1 : -1);
      if(a[fieldName] < b[fieldName]) return (order == 'asc' ? -1 : 1);
      return 0;
    });

    return value;
  }
}
