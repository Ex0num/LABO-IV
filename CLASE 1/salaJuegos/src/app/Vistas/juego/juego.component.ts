import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})

export class JuegoComponent implements OnInit {

  // Creo una variable publica, la declaro como string

  // Si o si lo tengo que instanciar. Sease aca o en el constructor
  public nombre:string= '';
  public apellido:string="Lopez";

  //-----------

  usuario:Usuario = new Usuario();

  constructor() 
  { 
    // // Aqui solo construyo el objeto solamente. La logica va desp del init.
    // this.nombre = '';
  }

  ngOnInit():void 
  {
    //La cargo en el ngOnInit el valor
    // this.nombre = "Gabriel";
    // console.log(this.nombre);

    this.usuario.nombre = "Gabriel";
    this.usuario.apellido = "Lopez";
  }
  
  // public aceptar():void
  // {
  //   // console.log(this.nombre);
  //   // console.log(this.apellido);
  // }

}
