import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todos: string[] = []


  addTodo(todoInput: string) {
    this.todos.push(todoInput)

  }

  removeTodo(index: number) {

    this.todos.splice(index, 1)
  }


  getTodos() {
    return this.todos
  }

  clearTodo() {
    this.todos = []
  }




}
