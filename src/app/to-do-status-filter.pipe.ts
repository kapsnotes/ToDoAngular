import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDoStatusFilter',
  pure: false
})
export class ToDoStatusFilterPipe implements PipeTransform {

  transform(value: any, showDoneToDo: boolean): any {
    if (showDoneToDo) {
      return value;
    }

    const result = [];

    for (let toDo of value) {
      if (!toDo.status) {
        result.push(toDo);
      }
    }

    return result;
  }

}
