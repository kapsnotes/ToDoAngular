import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  @Input() toDo;
  @ViewChild('name') name: ElementRef;
  paramA = '-';
  paramB = '-';
  fragment = '-';
  paramsSubscriber;

  constructor(private router: Router, private route: ActivatedRoute, private toDoService: ToDoService) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.paramA = this.route.snapshot.queryParams['a'];
    this.paramB = this.route.snapshot.queryParams['b'];
    this.fragment = this.route.snapshot.fragment;


    this.paramsSubscriber = this.route.params.subscribe((params: Params) => {
      id = params['id'];
      this.toDo = this.toDoService.getToDo(id);
    });


    this.toDo = this.toDoService.getToDo(id);
  }

  hideForm() {
    // this.onHide.emit();
    console.log(this.name);

    this.toDo.name = this.name.nativeElement.value;
  }

  loadItem3() {
    this.router.navigate(
      ['/todo', 'edit', '3'],
      {
        queryParams: {
          a: 'AA',
          b: 'BB'
        },
        fragment: 'HelloWorld'
      }
    );

  }

  ngOnDestroy() {
    this.paramsSubscriber.unsubscribe();
  }

}
