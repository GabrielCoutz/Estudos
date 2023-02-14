import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  search(value: string): void {
    this.emmitSearch.emit(value);
  }
}
