import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : Todo[];
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.todoService.getTodo().subscribe(todo=>
      this.todos = todo)
  }

  deleteTodo(todo : Todo){
    this.todos = this.todos.filter(t=>
      t.id != todo.id)
    this.todoService.deleteTodo(todo).subscribe(todo=>
      console.log("todo"));
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo=>
      this.todos.push(todo))
  }
  
}
