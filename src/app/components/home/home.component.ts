import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombre: string = 'Borja';
  apellido: string = 'Cabeza';
  imagen: string = "https://images.ecestaticos.com/X6jKxwFNcSPcl3CEQuItXawaAc8=/0x0:2097x1430/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F614%2F40c%2Ff02%2F61440cf024b55a412a97e4c4c59fffbd.jpg";  
  numero: number = 10;

  ancho: number = 200;
  alto: string = "auto";

  constructor() { }

  getVal() : number {
    return 5;
  }

  AumentarImagen(): void {
    this.ancho += 10;
    //this.ancho = this.ancho + 10;
  }

  ReducirImagen(): void {
    this.ancho -= 10;
  }

  onInput(event: Event) {
    let element = event.target as HTMLInputElement;
    
    if(element.value == 'Ana') this.nombre = 'Borja';
    else this.nombre = element.value;
  }
}
