import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() sendData = new EventEmitter();

  list: { name: string; age: number }[] = [
    {
      age: 10,
      name: 'John',
    },
    {
      age: 11,
      name: 'Xampson',
    },
    {
      age: 13,
      name: 'Maria',
    },
  ];

  getData(index: number) {
    const data = this.list[index];
    this.sendData.emit(data);
  }
}
