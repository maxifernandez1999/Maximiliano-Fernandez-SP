import { Pipe, PipeTransform } from '@angular/core';
import { Cripto } from '../models/cripto';

@Pipe({
  name: 'filterhabilitado'
})
export class FilterhabilitadoPipe implements PipeTransform {

  transform(value: Cripto[], arg:any): any {
    // const result = [];
    // for (const cripto of value) {
    //   if (cripto.type === arg) {
    //     result.push(user);
    //   }
    // }
    // return result;
  }

}
