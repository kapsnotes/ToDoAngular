import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-todo-list-item]',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo;
  @Input() index;
  @Output() onItemDelete = new EventEmitter<number>();
  @Output() onItemEdit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.onItemDelete.emit(this.index);
  }

  onEdit() {
    this.onItemEdit.emit(this.index);
  }

}
