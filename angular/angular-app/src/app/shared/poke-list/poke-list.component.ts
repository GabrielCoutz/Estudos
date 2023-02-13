import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  constructor(private pokeApiService: PokeApiService) {}

  pokemonList: Pokemon[] | null = null;

  ngOnInit() {
    this.pokeApiService.listAllPokemons.subscribe(
      ({ results }) => (this.pokemonList = results)
    );
  }
}
