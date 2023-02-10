import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroesp();
  }



  getHeroesp(): void {

    this.heroService.getAll(this.limit, this.offset)
    .subscribe(heroes => {
      this.total = this.heroService.getTotal()
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


}
