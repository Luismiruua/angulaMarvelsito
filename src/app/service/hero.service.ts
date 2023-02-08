import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../interfaces/hero';
import { MensajeHeroService } from './mensaje-hero.service';
import { Marvel, Result } from '../interfaces/marvelHero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  navigate(arg0: string[], arg1: { queryParams: { q: string; }; }) {
    throw new Error('Method not implemented.');
  }

  private heroesUrl = 'api/heroes';
  PUBLIC_KEY = '9c3fd62088363fb478ae5a2d211d7c27';
  HASH = ' 7b2b5bf608858c9af80820aa02691928';

  URL_API = `https://gateway.marvel.com/v1/public/characters`;

  apu = `?ts=luis&apikey=9c3fd62088363fb478ae5a2d211d7c27&hash=de7bd022cb41a267f79395503757f103`;

  constructor(private http: HttpClient,private mensajeHeroService: MensajeHeroService) { }




  getHeroes(): Observable<Marvel> {
    return this.http.get<Marvel>(this.URL_API + this.apu)
    .pipe(
      map((heroes: Marvel) => heroes),
    );
  }



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };






  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getHero(id: number): Observable<Marvel> {
    const url = `${this.URL_API}/${id}${this.apu}`;
    return this.http.get<Marvel>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Marvel>(`getHero id=${this.apu}`))
    );
  }

  getHeroPage(page:number){
    return this.http.get(this.URL_API + '?page=' +page);
  }

  private log(mensaje: string) {
    this.mensajeHeroService.add(`HeroService: ${mensaje}`);
  }

/*
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(ad => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }*/

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
/*
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }*/
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /*searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }*/
  searchHeroes(query = '') {
    const filter = `${this.URL_API}/?name=${query}`;

      return this.http.get<Result[]>(filter);
  }
  getDetails(id:number){
    return this.http.get<Result[]>(`${this.URL_API}/${id}`);
  }

  getAleatHeroes(): Observable<Result[]> {
    const num = Math.random() * 1542;
    const random = `https://gateway.marvel.com/v1/public/characters?offset=${num}&ts=luis&apikey=9c3fd62088363fb478ae5a2d211d7c27&hash=de7bd022cb41a267f79395503757f103`;

    return this.http.get<Marvel>(random).pipe(
      map((heroes: Marvel) => heroes.data.results)
    )

  }
}
