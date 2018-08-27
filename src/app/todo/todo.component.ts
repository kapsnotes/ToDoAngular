import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [
    {name: 'Angular Session 1', status: true},
    {name: 'Angular Session 1 Assignment', status: true},
    {name: 'Angular Session 2', status: true},
    {name: 'Angular Session 2 Assignment', status: true},
    {name: 'Angular Session 3', status: false},
    {name: 'Angular Session 3 Assignment', status: false},
  ];

  editFormVisible = false;
  editFormItem = null;

  constructor() { }

  ngOnInit() {
  }

  toDoAdded(toDo) {
    this.todos.push({
      name: toDo,
      status: false
    });
  }

  onDelete(index) {
    this.todos.splice(index, 1);
  }

  onEdit(index) {
    this.editFormItem = this.todos[index];
    this.editFormVisible = true;
  }

  hideEditForm() {
    this.editFormItem = null;
    this.editFormVisible = false;
  }

}
