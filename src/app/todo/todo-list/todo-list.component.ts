import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

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

  constructor(toDoService: ToDoService) {
    this.toDoServices = toDoService;
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
