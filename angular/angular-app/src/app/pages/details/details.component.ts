import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DirtyResponseApi, Pokemon, Species } from 'src/app/interfaces/pokemon';

import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private services: PokeApiService
  ) {}

  erro: boolean = false;
  pokemon: Pokemon | undefined;
  pokemon_url = 'https://pokeapi.co/api/v2/pokemon';
  species_url = 'https://pokeapi.co/api/v2/pokemon-species';

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const id: string = this.route.snapshot.params['id'];

    const responsePokemon = this.services.apiGetPokemon<DirtyResponseApi>(
      `${this.pokemon_url}/${id}`
    );

    const responseSpecies = this.services.apiGetPokemon<Species>(
      `${this.species_url}/${id}`
    );

    forkJoin([responsePokemon, responseSpecies]).subscribe({
      next: ([pokemon, species]) => {
        this.pokemon = this.createPokemonObjectFromResponses(pokemon, species);
      },
      error: (err) => {
        this.erro = true;
      },
    });
  }

  createPokemonObjectFromResponses(
    response: DirtyResponseApi,
    species: Species
  ): Pokemon {
    return {
      color: species.color.name,
      id: response.id,
      species: [species.color.name],
      url: `${this.pokemon_url}/${response.id}`,
      img: response.sprites.other.dream_world.front_default,
      types: response.types.map(({ type }) => type.name),
      name: response.name,
      stats: response.stats.map(({ base_stat, stat }) => ({
        base_stat,
        name: stat.name,
      })),
    };
  }
}
