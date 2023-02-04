import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeHeroService {
  mensajes: string[] = [];

  add(mensaje:string){
      this.mensajes.push(mensaje);
  }
  clear(){
    this.mensajes = [];
  }
}
