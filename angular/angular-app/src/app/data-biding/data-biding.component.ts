import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent {
  nome: string = 'nome';
  positions: { x: number; y: number } = { x: 0, y: 0 };

  mouseMoveEvent(e: MouseEvent) {
    this.positions.x = e.clientX;
    this.positions.y = e.clientY;
  }
}
