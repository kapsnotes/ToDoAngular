import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoListItemComponent } from './todo/todo-list/todo-list-item/todo-list-item.component';
import { RegisterComponent } from './register/register.component';
import { SubStringPipe } from './sub-string.pipe';
import { ToDoStatusFilterPipe } from './to-do-status-filter.pipe';
import { TestPipe } from './test.pipe';

const appRoutes: Routes = [
  { path: '', component: TodoListComponent },
  {
    path: 'todo',
    component: TodoListComponent,
    children: [
      { path: 'add', component: TodoAddComponent },
      { path: 'edit/:id', component: TodoEditComponent }
    ]
  },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoListItemComponent,
    RegisterComponent,
    SubStringPipe,
    ToDoStatusFilterPipe,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
