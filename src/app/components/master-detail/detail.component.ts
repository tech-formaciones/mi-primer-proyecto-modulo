import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnChanges, DoCheck, OnDestroy {  
  @Input() userElement: User;
  @Output() onSave = new EventEmitter();

  /*
  El parámetro static en el decorador @ViewChild controla cuándo Angular resuelve la referencia del ViewChild.
   + static: true: Angular resuelve la referencia al momento de la inicialización del componente, es decir, en ngOnInit.
   + static: false (por defecto): Angular resuelve la referencia después de que la vista se haya inicializado, es decir, en ngAfterViewInit. */

  // Opción 1: Busca una referencia a un elemento del DOM en el template del componente que tiene el atributo #title.
  //           Especifica que el elemento DOM al que hace referencia titulo es un elemento de encabezado (<h1>, <h2>, etc.),
  @ViewChild('title', { static: true }) titulo!: ElementRef<HTMLHeadElement>;

  // Opción 2: Busca una referencia a un elemento del DOM en el template del componente que tiene el atributo #title.
  //           No especifica el tipo de elemento, por lo que titulo puede ser cualquier tipo de elemento del DOM.
  //@ViewChild('title') titulo!: ElementRef;

  constructor() {
    this.userElement = new User();
    console.log('Ejecutando el constructor de Detalle.');
  }

  ngOnInit(): void {
    console.log('Componente Detalle, iniciado.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Detalle, (onChanges).');
    console.log('Changes: ' + JSON.stringify(changes));

    if(this.userElement.firstname != undefined && this.userElement.lastname != undefined)
      this.titulo.nativeElement.innerHTML = 'Ficha de ' + this.userElement.firstname + ' ' + this.userElement.lastname;

    // También podemos cambiar el contenido de title con los valores actuales.
    // Equivalente a la instrucción superior
    //this.titulo.nativeElement.innerHTML = 'Ficha de ' + changes['userElement'].currentValue.firstname + ' ' + changes['userElement'].currentValue.lastname;

    // Se refiere a un valor anterior de la propiedad userElement
    // changes['userElement'].previousValue.firstname

    // Se refiere a un valor actual de la propiedad userElement
    // changes['userElement'].currentValue.firstname
  }

  ngDoCheck(): void {
    console.log('Componente Detalle, modificado (DoCheck).');
  }

  ngOnDestroy(): void {
    console.log('Componente Detalle, (onDestroy).');
  }
  
  onSaveClient(): void {
    // Opción 1: código para grabar los cambios del cliente.
    //           Llamar a un API para cambiar los datos del cliente.
    // ...

    // Opción 2: el grabar los cambios del cliente lo gestiona el padre.
    //           Se ejecuta una función del componente padre que graba los cambios del cliente.
    this.onSave.emit(this.userElement);
    console.log('Componente Detalle, (onDestroy).');
  }

  // Función creada para demostrar que puede ser llamada desde el padre cuando el hijo es contenido
  // en una varible utilizando @ViewChild.
  onDemo() : void {
    alert('Demostración con el @ViewChild.');
  }
}
