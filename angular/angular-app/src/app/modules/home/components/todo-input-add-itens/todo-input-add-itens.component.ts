import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() emmitItemTaskList = new EventEmitter();

  addItemTaskList: string = '';

  submitItemTaskList() {
    if (this.taskIsEmpty(this.addItemTaskList)) return;

    const taskWithSingleSpaces = this.addItemTaskList.trim();
    this.emmitItemTaskList.emit(taskWithSingleSpaces);

    this.addItemTaskList = '';
  }

  taskIsEmpty(task: string): boolean {
    return !task.trim();
  }
}
