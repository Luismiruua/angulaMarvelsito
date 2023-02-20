import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/marvelHero';
import { HeroService } from '../service/hero.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  public heroes: Result[] = [];

  public total: number = 0;
  public limit: number = 20;
  public offset: number = 0;
  public p: number = 0;
  public u:number = 1560;

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroesp();
  }



  getHeroesp(): void {

    this.heroService.getAll(this.limit, this.offset)
    .subscribe(heroes => {
      this.total = this.heroService.getTodosLosHeroes()
      this.heroes = heroes.results
    });
  }

  public siguientePagina() {
    this.offset = this.offset + this.limit;
    this.getHeroesp()
  }

  public prevPagina() {
    this.offset = this.offset - this.limit;
    this.getHeroesp()
  }

  public primeraPag(){
    this.offset = this.p;
    this.getHeroesp()

  }
  public ultimaPag() {
    this.offset = this.u;
    this.getHeroesp()

  }




}
