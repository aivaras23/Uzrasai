import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ShowTodoComponent } from './components/show-todo/show-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTodoComponent, ShowTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uzrasai';
}
