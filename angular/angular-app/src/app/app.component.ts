import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.template.html',
})
export class AppComponent {
  addValue: number = 0;
  eventData: { name: string; age: number } | undefined;

  add() {
    this.addValue++;
  }

  getData(event: { name: string; age: number }) {
    this.eventData = event;
  }
}
