import { Component } from '@angular/core';
import { Investments } from './model/investments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  investments: Investments[] = [
    {
      name: 'Itau',
      value: 100,
    },
    {
      name: 'Bradesco',
      value: 140,
    },
    {
      name: 'Nubank',
      value: 103,
    },
    {
      name: 'Inter',
      value: 49,
    },
  ];
}
