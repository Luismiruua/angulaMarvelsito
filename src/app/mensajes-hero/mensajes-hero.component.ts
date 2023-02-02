import { Component, OnInit } from '@angular/core';
import { MensajeHeroService } from '../service/mensaje-hero.service';

@Component({
  selector: 'app-mensajes-hero',
  templateUrl: './mensajes-hero.component.html',
  styleUrls: ['./mensajes-hero.component.scss']
})
export class MensajesHeroComponent implements OnInit{
  constructor(public mensajeHeroService: MensajeHeroService) {}

  ngOnInit(): void {
  }

}
