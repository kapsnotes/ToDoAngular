import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subString'
})
export class SubStringPipe implements PipeTransform {

  transform(value: any, start: number, end: number): any {
    if (value.length > (end - start)) {
      return value.substr(start, (end - start)) + '...';
    }

    return value;
  }

}
