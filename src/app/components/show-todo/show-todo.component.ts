import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../models/todoitem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-show-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-todo.component.html',
  styleUrl: './show-todo.component.css'
})
export class ShowTodoComponent {
  public todos:Todo[];
      public constructor(private todoService:TodoService) {
      this.todos = todoService.todo;
    }
    public deleteTodo(i:number){
      this.todoService.deleteTodo(i);
    }
}
