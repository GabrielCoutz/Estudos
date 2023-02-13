import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ApiResponse, DirtyResponseApi, Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private request: HttpClient) {}

  private apiUrl: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

  get listAllPokemons(): Observable<ApiResponse> {
    return this.request
      .get<ApiResponse>(this.apiUrl)
      .pipe(tap(({ results }: ApiResponse) => this.setPokemonInfo(results)));
  }

  setPokemonInfo(results: Pokemon[]): Subscription[] {
    return results.map((pokemon) =>
      this.request.get(pokemon.url).subscribe((response: any) => {
        const dirtyPokemon: DirtyResponseApi = response;
        pokemon.img = dirtyPokemon.sprites.front_default;
        pokemon.types = dirtyPokemon.types.map(({ type }) => type.name);
      })
    );
  }
}
