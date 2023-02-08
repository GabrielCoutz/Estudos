import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: string[] = ['X-bacon', 'beans', 'soda'];
  private url: string = 'http://localhost:3000';
  emitEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}/list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  foodListAdd(food: string): number {
    this.foodListAlert(food);
    return this.list.push(food);
  }

  foodListAlert(value: string): void {
    return this.emitEvent.emit(value);
  }
}
