import { Component, Input } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  taskList: TaskList[] = [];

  deleteItemTaskList(task: number) {
    this.taskList.splice(task, 1);
    this.saveTodoListInLocalStorage();
  }

  deleteAllTaskList() {
    const confirmDeleteAll = confirm('Are you sure you want to delete all?');
    if (confirmDeleteAll) this.taskList = [];
    localStorage.removeItem('todoList');
  }

  setEmmitTaskList(task: string) {
    this.taskList.push({ task, check: false });
    this.saveTodoListInLocalStorage();
  }

  ngDoCheck() {
    this.taskList.sort(
      (first, second) => Number(first.check) - Number(second.check)
    );
  }

  ngOnInit() {
    this.checkIfTodoListIsSaved();
  }

  validationInput(task: string, index: number) {
    if (!task) {
      const confirmation = confirm('Task is empty. Want to delete it?');
      if (confirmation) this.deleteItemTaskList(index);
    }
  }

  saveTodoListInLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.taskList));
  }

  checkIfTodoListIsSaved() {
    const todoListInLocalStorage = localStorage.getItem('todoList');
    if (!todoListInLocalStorage) return;

    const parsedTodoList: TaskList[] = JSON.parse(todoListInLocalStorage);
    this.taskList = parsedTodoList;
  }
}
