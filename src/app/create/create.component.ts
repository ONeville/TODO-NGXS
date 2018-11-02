import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Todo, AddTodo } from '../state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newTodo: string;
  constructor(private store: Store) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.newTodo) {
      this.store.dispatch(new AddTodo (<Todo>{ title: this.newTodo }));
    }
    this.newTodo = '';
  }
}
