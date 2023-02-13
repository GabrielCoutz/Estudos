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
      this.apiGetPokemon<Pokemon>(pokemon.url).subscribe((response: any) => {
        const { sprites, types, id }: DirtyResponseApi = response;

        pokemon.id = id;
        pokemon.img = sprites.other.dream_world.front_default;
        pokemon.types = types.map(({ type }) => type.name);
      })
    );
  }

  apiGetPokemon<T>(url: string): Observable<T> {
    return this.request.get<T>(url);
  }
}
