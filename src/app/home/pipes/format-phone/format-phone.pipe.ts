import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(value.startsWith('+'));
    return null;
  }

}
