import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // @Input() todoList;
  // @Output() onItemDelete = new EventEmitter<number>();
  // @Output() onItemEdit = new EventEmitter<number>();
  toDoServices: ToDoService;
  showDoneTasks = true;

  constructor(toDoService: ToDoService, private router: Router) {
    this.toDoServices = toDoService;
  }

  loadEditPage() {
    this.router.navigate(['/todo', 'edit']);
  }

  ngOnInit() {
  }

  // onDelete(index) {
  //   this.onItemDelete.emit(index);
  // }
  //
  // onEdit(index) {
  //   this.onItemEdit.emit(index);
  // }
}
