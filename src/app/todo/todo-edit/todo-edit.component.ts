import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() toDo;
  @Output() onHide = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hideForm() {
    this.onHide.emit();
  }

}
