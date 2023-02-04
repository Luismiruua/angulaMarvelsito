import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';
import { MensajeHeroService } from '../service/mensaje-hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  implements OnInit{

  heroes: Hero[] = [];

  selectedHero?: Hero;



  constructor(private heroService: HeroService, private mensajeHeroService: MensajeHeroService){}

  ngOnInit(): void {
    this.getHeroes();

  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    this.mensajeHeroService.add(`Has seleccionado a un héroe con id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
