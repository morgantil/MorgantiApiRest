import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../model/personajeInterface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
public listaPersonaje = new Array;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<Personaje[]>('https://62e31bd53891dd9ba8f450e1.mockapi.io/personajes').subscribe (data =>{
      console.log(data);
      this.listaPersonaje.push(data);
    })
console.log('LA LISTA ES',this.listaPersonaje);

  }


}
