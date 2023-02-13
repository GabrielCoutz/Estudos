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

  filtredPokemonList: Pokemon[] | undefined;
  private staticPokemonList: Pokemon[] | undefined;

  ngOnInit() {
    this.pokeApiService.listAllPokemons.subscribe(({ results }) => {
      this.staticPokemonList = results;
      this.filtredPokemonList = this.staticPokemonList;
    });
  }

  getSearch(value: string) {
    const filter = this.staticPokemonList?.filter(
      (pokemon) => !pokemon.name.indexOf(value.toLocaleLowerCase())
    );
    this.filtredPokemonList = filter;
  }
}
