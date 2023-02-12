import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private request: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

  get listAllPokemons(): Observable<any> {
    return this.request.get<any>(this.url).pipe(
      tap((res) => res),
      tap(({ results }) => this.setPokemonInfo(results))
    );
  }

  setPokemonInfo(results: any) {
    return results.map((resPokemon: any) => {
      this.request
        .get(resPokemon.url)
        .pipe(map((res) => res))
        .subscribe((res) => (resPokemon.status = res));
    });
  }
}
