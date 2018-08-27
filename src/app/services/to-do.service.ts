import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todos = [
    new ToDo('Angular Session 1', true),
    new ToDo('Angular Session 1 Assignment', true),
    new ToDo('Angular Session 2', true)
  ];

  constructor() { }

  toDoAdded(name: string) {
    console.log('Adding ' + name);
    this.todos.push(new ToDo(name, false));
  }
}
