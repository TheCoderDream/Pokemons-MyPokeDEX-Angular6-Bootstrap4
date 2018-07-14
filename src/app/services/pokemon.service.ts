import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Pokemon} from "../models/pokemon";
import { catchError, map, tap } from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {MessageService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'api/pokemons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private msgSrv: MessageService) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(tap(
      _ => this.log(`get pokemons`)),
      catchError(this.handleError('getPokemons', []))) ;
  }

  deletePokemon(pokemon: Pokemon | number): Observable<Pokemon> {
    const id = typeof pokemon === 'number' ? pokemon : pokemon.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  addPokemon(pokemon: any): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.url, pokemon, this.httpOptions);
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.msgSrv.add(`HeroService: ${message}`);
  }


}
