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

  constructor(private request: HttpClient) {}

  foodList(): Observable<FoodList[]> {
    return this.request.get<FoodList[]>(`${this.url}/list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  foodListAdd(food: string): Observable<FoodList> {
    return this.request
      .post<FoodList>(`${this.url}/list-food`, {
        name: food,
      })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListEdit({ id, name }: FoodList): Observable<FoodList> {
    return this.request
      .put<FoodList>(`${this.url}/list-food/${id}`, {
        name,
      })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListDelete({ id }: FoodList): Observable<FoodList> {
    return this.request.delete<FoodList>(`${this.url}/list-food/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  foodListUpdate({ id, name }: FoodList): Observable<FoodList> {
    return this.request
      .patch<FoodList>(`${this.url}/list-food/${id}`, {
        name,
      })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListAlert(value: FoodList): void {
    return this.emitEvent.emit(value);
  }
}
