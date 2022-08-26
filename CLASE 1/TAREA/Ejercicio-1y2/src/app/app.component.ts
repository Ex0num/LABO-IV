import { Component, createComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Ejercicio-1';

  // Si o si lo tengo que instanciar. Sease aca o en el constructor
  public edadUno:number= 0;
  public edadDos:number= 0;
  public resultado:number= 0;

  constructor() 
  { 
    
  }

  public limpiarEdades():void
  {
    this.edadUno = 0;
    this.edadDos = 0;

    let txtBoxPromedio = document.getElementById("promedioCalculado");
    txtBoxPromedio?.setAttribute("hidden","true");
    let lblPromedio = document.getElementById("lblPromedioCalculado");
    lblPromedio?.setAttribute("hidden","true");

    let txtBoxSuma = document.getElementById("sumaCalculada");
    txtBoxSuma?.setAttribute("hidden","true");
    let lblSuma = document.getElementById("lblSumaCalculada");
    lblSuma?.setAttribute("hidden","true");
  }

  public calcularEdades():void
  {
    let resultadoPromedio = this.calcularPromedioEdades();
    let resultadoSuma = this.calcularSumaEdades();

    console.log("Promedio: " + resultadoPromedio);
    console.log("Suma: " + resultadoSuma);

    let lblPromedio = document.getElementById("lblPromedioCalculado");
    lblPromedio?.removeAttribute("hidden");

    let txtBoxPromedio = document.getElementById("promedioCalculado");
    txtBoxPromedio?.removeAttribute("hidden");
    txtBoxPromedio?.setAttribute("value",resultadoPromedio.toString());

    let lblSuma = document.getElementById("lblSumaCalculada");
    lblSuma?.removeAttribute("hidden");

    let txtBoxSuma = document.getElementById("sumaCalculada");
    txtBoxSuma?.removeAttribute("hidden");
    txtBoxSuma?.setAttribute("value",resultadoSuma.toString());
  }

  private calcularPromedioEdades():number
  {
    this.resultado = (this.edadUno + this.edadDos) / 2;
    return this.resultado;
  }

  private calcularSumaEdades():number
  {
    this.resultado = (this.edadUno + this.edadDos)
    return this.resultado;
  }
}

