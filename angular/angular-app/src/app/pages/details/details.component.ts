import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon, Species } from 'src/app/interfaces/pokemon';

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

  pokemon: Pokemon | undefined;
  pokemon_url = 'https://pokeapi.co/api/v2/pokemon';
  species_url = 'https://pokeapi.co/api/v2/pokemon-species';

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    const responsePokemon = this.services.apiGetPokemon<Pokemon>(
      `${this.pokemon_url}/${id}`
    );

    const responseSpecies = this.services.apiGetPokemon<Species>(
      `${this.species_url}/${id}`
    );

    forkJoin([responsePokemon, responseSpecies]).subscribe(
      ([pokemon, species]) => {
        this.pokemon = pokemon;
        this.pokemon.color = species.color.name;
        this.pokemon.species.push(species.names[0].name);
        console.log(this.pokemon);
      }
    );
  }
}
