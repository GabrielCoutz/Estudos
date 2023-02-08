import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: string[] = ['X-bacon', 'beans', 'soda'];

  foodList(): string[] {
    return this.list;
  }

  foodListAdd(food: string): number {
    return this.list.push(food);
  }
}
