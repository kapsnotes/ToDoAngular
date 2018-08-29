import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() toDo;
  @Output() onHide = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private toDoService: ToDoService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['id']);
    var id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      id = params['id'];
      this.toDo = this.toDoService.getToDo(id);
    });


    this.toDo = this.toDoService.getToDo(id);
  }

  hideForm() {
    this.onHide.emit();
  }

  loadItem3() {
    this.router.navigate(['/todo', 'edit', '3']);
  }

}
