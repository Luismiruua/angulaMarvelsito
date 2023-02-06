import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { Marvel, Result } from '../interfaces/marvelHero';
import { HeroService } from '../service/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: Result[] = [];

  characterSvc: any;

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
    //this.getCharacters();
  }



  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.data.results);
  }


  /*
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }*/
}
