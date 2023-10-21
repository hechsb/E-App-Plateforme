import { Component } from '@angular/core';
import { TodoListService } from '../../../Services/todo-list.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoInput = ''

  todos: string[] = []

  constructor(private TodoListService: TodoListService) {
    this.todos = this.TodoListService.getTodos();
  }

  addTodo() {
    this.TodoListService.addTodo(this.todoInput)

  }

  removeTodo(index: number) {

    this.todos.splice(index, 1)
  }


}
