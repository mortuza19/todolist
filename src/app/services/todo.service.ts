import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type': 'Application/JSON'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl : string = "https://jsonplaceholder.typicode.com/todos";

  todoLimit : string = "?_limit=5"


  constructor( private http : HttpClient) { }

  getTodo() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl + this.todoLimit)
  }

  toggleCompleted(todo : Todo) :Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  addTodo(todo : Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoUrl,todo,httpOptions)
  }
}
