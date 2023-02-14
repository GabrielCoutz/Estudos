import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErroComponent } from './erro/erro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErroComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErroComponent,
  ],
})
export class SharedModule {}
