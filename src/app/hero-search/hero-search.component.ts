import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';
import { HttpClient } from '@angular/common/http';
import { Result } from '../interfaces/marvelHero';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Result[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private http:HttpClient) {}

  // Push a search term into the observable stream.

  onSearchHeroes(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

     this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.onSearchHeroes(term)),
    );

  }


}


