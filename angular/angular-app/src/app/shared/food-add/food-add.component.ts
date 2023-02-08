import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) {}

  listAddItem(item: string) {
    this.foodListService.foodListAdd(item).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: (error) => console.log(error),
    });
  }
}
