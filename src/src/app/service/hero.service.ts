import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MensajeHeroService } from './mensaje-hero.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mensajeHeroService: MensajeHeroService) { }

  getHeroes(): Observable<Hero[]> {
    this.mensajeHeroService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
