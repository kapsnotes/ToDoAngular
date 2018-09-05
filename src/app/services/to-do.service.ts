import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  defaultCategory = new Category(1, 'Inbox');
  currentId = 0;

  todos: ToDo[] = [];

  constructor() {
    this.addNewToDo('Angular Session 1', true);
    this.addNewToDo('Angular Session 1 Assignment', false);
    this.addNewToDo('Angular Session 2', true);
  }

  toDoAdded(name: string, status: boolean) {
    this.addNewToDo(name, status);
  }

  addNewToDo(name: string, status: boolean) {
    this.currentId++;
    this.todos.push(
      new ToDo(this.currentId, name, status, this.defaultCategory)
    );
  }

  getToDo(id: number): ToDo {
    // var toDo = this.todos.find((o) => {
    //   return o.id == id;
    // });
    //return toDo;


    return this.todos.find( o => o.id == id );
  }
}
