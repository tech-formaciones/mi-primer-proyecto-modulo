import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../data/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnChanges, DoCheck, OnDestroy {  
  @Input() userElement: User;
  @Output() onSave = new EventEmitter();

  @ViewChild('title') titulo!: ElementRef<HTMLHeadElement>;

  //@ViewChild('title') titulo!: ElementRef;

  constructor() {
    this.userElement = new User();
    console.log('Ejecutando el constructor de Detalle.');
  }

  ngOnInit(): void {
    console.log('Componente Detalle, iniciado.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Detalle, cambios en las propiedades.');
    console.log('Changes: ' + JSON.stringify(changes));

    // changes['userElement'].previousValue.firstname

    this.titulo.nativeElement.innerHTML = 'Ficha de ' + this.userElement.firstname + ' ' + this.userElement.lastname;
    //this.titulo.nativeElement.innerHTML = 'Ficha de ' + changes['userElement'].currentValue.firstname + ' ' + changes['userElement'].currentValue.lastname;
  }

  ngDoCheck(): void {
    console.log('Componente Detalle, modificado (DoCheck).');
  }

  ngOnDestroy(): void {
    console.log('Componente Detalle, destruido.');
  }
  

  onSaveClient(): void {
    // Opción 1: código para grabar los cambios del cliente.
    //           Llamar a un API para cambiar los datos del cliente.
    // ...

    // Opción 2: el grabar los cambios del cliente lo gestiona el padre.
    //           Se ejecuta una función del componente padre que graba los cambios del cliente.
    this.onSave.emit(this.userElement);
    console.log('Se pulso Grabar.')
  }

  onDemo() : void {
    alert('Demostración con el @ViewChild.');
  }
}
