import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [HeaderComponent, PokeSearchComponent, PokeListComponent,],
  imports: [CommonModule],
  exports: [HeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}
