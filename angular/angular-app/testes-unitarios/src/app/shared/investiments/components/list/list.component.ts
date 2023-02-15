import { Component } from '@angular/core';
import { ListInvestmentsService } from 'src/app/services/list-investments.service';
import { Investments } from '../../model/investments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private investmentsApi: ListInvestmentsService) {}
  investments: Investments[] | undefined;

  ngOnInit(): void {
    this.investmentsApi.getInvestments.subscribe({
      next: (response) => (this.investments = response),
      error: (erro) => console.log(erro),
    });
  }
}
