import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todoitem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
    public newTodo:string|null = null;

    public todos:Todo[] = [];

    public constructor(private todoService:TodoService) {
      this.todos = todoService.todo;
    }

    public addTodo(){
      if(this.newTodo != null){
        this.todoService.addTodo({
            newTodo:this.newTodo
        })
        console.log(this.todos);
        this.newTodo = null;
      }
    }
}
