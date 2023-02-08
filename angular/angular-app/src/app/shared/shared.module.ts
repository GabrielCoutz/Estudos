import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodListComponent, FoodAddComponent],
  exports: [FoodListComponent, FoodAddComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class SharedModule {}
