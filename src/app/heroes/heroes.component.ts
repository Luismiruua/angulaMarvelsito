import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/marvelHero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  public heroes: Result[] = [];
  public page?: number;
  public p: number = 1;
  public total:number=0;
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroesPage();
    //this.getCharacters();
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.data.results);
  }



  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.data.results);
  }


  getHeroesPage():void{
      this.heroService.getHeroPage(this.p)
      .subscribe((response:any)=>{
        this.heroes = response.data;
        this.total = response.total
      })
  }

  pageChangeEvent(event:number){
    this.p = event;
    this.getHeroesPage();
  }

  /*
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }*/
}
