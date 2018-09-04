import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  // @Output() toDoAdded = new EventEmitter<string>();
  toDoAddedInfo = false;
  toDoMessage = '';

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }

  addToDo(addToDoForm: NgForm) {
    console.log(addToDoForm);
    this.toDoService.toDoAdded(addToDoForm.value.toDo.name, addToDoForm.value.toDo.status);

    this.toDoMessage = 'To Do \'' + addToDoForm.value.toDo.name + '\' added.';
    this.toDoAddedInfo = true;

    setTimeout(() => {
      this.toDoAddedInfo = false;
    }, 5000);
  }

  dismissAddedAlert() {
    this.toDoAddedInfo = false;
  }
}
