import { Injectable } from '@angular/core';
import { Todo } from '../models/todoitem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todo:Todo[]=[
 
  ]

  constructor(){
    let string = localStorage.getItem('todoList');
    if(string != null){
      this.todo = JSON.parse(string);
    }
  }

  public addTodo(todo:Todo){
    this.todo.push(todo);
     localStorage.setItem('todoList',JSON.stringify(this.todo));
  }

  public deleteTodo(i:number){
    this.todo.splice(i,1);
    localStorage.setItem('todoList',JSON.stringify(this.todo));
  }

}
