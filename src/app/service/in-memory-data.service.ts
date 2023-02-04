import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Lokuras' },
      { id: 2, name: 'Eduardo' },
      { id: 3, name: 'Bombastik' },
      { id: 4, name: 'Spaiderman' },
      { id: 5, name: 'Tecnokoko' },
      { id: 6, name: 'Tia Paola' },
      { id: 7, name: 'Diamante' },
      { id: 8, name: 'Dr Inteligente' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tormenta' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
