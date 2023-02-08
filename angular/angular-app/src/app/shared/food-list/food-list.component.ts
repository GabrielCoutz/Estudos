import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent {
  foodList: FoodList[] = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodListService.foodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => console.log(error),
    });

    this.foodListService.emitEvent.subscribe((res) => this.foodList.push(res));
  }

  foodListDelete(food: FoodList) {
    this.foodListService.foodListDelete(food).subscribe((res) => {
      const indexDeletedItem = this.foodList.indexOf(res);
      this.foodList.splice(indexDeletedItem, 1);
    });
  }

  foodListUpdate(newFood: FoodList) {
    this.foodListService.foodListUpdate(newFood).subscribe((res) => {
      const indexOldFood = this.foodList.indexOf(res);
      this.foodList[indexOldFood] = newFood;
    });
  }
}
