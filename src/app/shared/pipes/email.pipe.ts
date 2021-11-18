import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    let valueSplit:string[] = value.split('@');
    return valueSplit[0] + '    |    ' + valueSplit[1];  
  }

}
