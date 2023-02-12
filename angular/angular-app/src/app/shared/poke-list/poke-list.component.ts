import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  constructor(private pokeApiService: PokeApiService) {}

  pokemonList: any;

  ngOnInit() {
    this.pokeApiService.listAllPokemons.subscribe((res) => {
      this.pokemonList = res.results;
      console.log(this.pokemonList);
    });
  }
}
