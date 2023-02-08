import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [FoodListComponent, FoodAddComponent],
  exports: [FoodListComponent, FoodAddComponent],
  imports: [CommonModule],
})
export class SharedModule {}
