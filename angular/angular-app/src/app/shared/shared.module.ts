import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}
