import { Component, OnInit } from '@angular/core';
import { TodoState, Todo } from '../state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  @Select(TodoState.getTodoComplete) todos$: Observable<Todo>;

  constructor() { }

  ngOnInit() {
  }

}
