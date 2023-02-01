import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-hero-caracteristicas',
  templateUrl: './hero-caracteristicas.component.html',
  styleUrls: ['./hero-caracteristicas.component.scss']
})
export class HeroCaracteristicasComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor() { }

  @Input() hero: Hero | undefined;

}
