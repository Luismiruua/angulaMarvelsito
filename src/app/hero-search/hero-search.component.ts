import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private http:HttpClient) {}

  // Push a search term into the observable stream.


  ngOnInit(): void {
    /**
     *     this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
     */

  }

  onSearchHeroes(value: string): void{
    console.log('Buscar->',value)
      if(value && value.length > 3){
        this.heroService.navigate(['/character-list'], {
          queryParams: {
            q:value
          }
        })
      }
  }
}
