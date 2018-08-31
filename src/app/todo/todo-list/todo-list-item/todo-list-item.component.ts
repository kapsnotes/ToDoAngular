import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ToDoService} from '../../../services/to-do.service';

@Component({
  selector: '[app-todo-list-item]',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo;
  @Input() index;

  constructor(private toDoService: ToDoService, private router: Router) { }

  ngOnInit() {
  }

  onDelete() {
    // this.onItemDelete.emit(this.index);
  }

  onEdit() {
    // this.onItemEdit.emit(this.index);
    this.router.navigate(['/todo', 'edit', this.index + 1]);
  }

}
