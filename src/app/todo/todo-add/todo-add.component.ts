import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {ToDoService} from '../../services/to-do.service';

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

  addToDo(toDo: HTMLInputElement) {
    // this.toDoAdded.emit(toDo.value);
    this.toDoService.toDoAdded(toDo.value);

    this.toDoMessage = 'To Do \'' + toDo.value + '\' added.';
    toDo.value = '';
    this.toDoAddedInfo = true;

    setInterval(() => {
      this.toDoAddedInfo = false;
    }, 5000);

    // setInterval(function () {
    //   this.toDoAddedInfo = false;
    // }, 5000);
  }

  dismissAddedAlert() {
    this.toDoAddedInfo = false;
  }
}
