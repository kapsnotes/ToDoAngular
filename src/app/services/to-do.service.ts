import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';
import { Category } from '../models/Category';
import { ToDoServerService } from './to-do.server.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  defaultCategory = new Category(1, 'Inbox');
  currentId = 0;

  todos: ToDo[] = [];

  constructor(private toDoServerService: ToDoServerService) {
    // this.addNewToDo('Angular Session 1', true);
    // this.addNewToDo('Angular Session 1 Assignment', false);
    // this.addNewToDo('Angular Session 2', true);

    console.log(this.todos);

    // this.toDoServerService.getCategories().subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );

    this.toDoServerService.getTodos().subscribe(
      (response) => {
        response.forEach((element) => {
          this.addNewToDo(element['name'], element['status']);
        });
      },
      (error) => console.log(error)
    );
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
    return this.todos.find( o => o.id == id );
  }
}
