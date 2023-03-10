import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';
import { Result } from '../interfaces/marvelHero';


@Component({
  selector: 'app-hero-caracteristicas',
  templateUrl: './hero-caracteristicas.component.html',
  styleUrls: ['./hero-caracteristicas.component.scss']
})
export class HeroCaracteristicasComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  @Input()
  hero?: Result;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero =>this.hero = hero.data.results[0]);
  }

  goBack(): void {
    this.location.back();
  }

}
