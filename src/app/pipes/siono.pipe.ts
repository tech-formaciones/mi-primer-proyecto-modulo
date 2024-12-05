import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siono'
})
export class SionoPipe implements PipeTransform {

  transform(value: boolean, arg1: string = 'Sí', arg2: string = 'No'): string {
    if(value) return arg1;
    else return arg2;
  }

}
