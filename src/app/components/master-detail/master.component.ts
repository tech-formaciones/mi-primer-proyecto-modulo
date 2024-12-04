import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { User } from './../../data/user.model';
import data from './../../data/data.json';
import { DetailComponent } from './detail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-master',
  standalone: false,
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit, AfterViewInit {
  usersList: Array<User> | undefined;
  userSelect: User;

  currentDate: Date;

  // Almacena una instalcia de DetailComponent representado en el HTML, utilizando el nombre de la clase
  @ViewChild(DetailComponent) detalleA!: DetailComponent;

  // Almacena una instalcia de DetailComponent representado en el HTML, utilizado el identificador detail1
  @ViewChild('detail1') detalleB!: DetailComponent;

  time: any = new Observable((observer) => {
    setInterval(() => {
      let fecha = new Date();
      observer.next(fecha);
    }, 1000);
  });

  constructor() {
    this.usersList = data as Array<User>;
    this.userSelect = new User();
    this.currentDate = new Date();

    console.log('Ejecutando el constructor de Maestro.');
  }

  ngAfterViewInit(): void {
    console.log('Componente Maestro, vista creada.');
  }

  ngOnInit(): void {
    console.log('Componente Maestro, iniciado.');
  }

  onClickFicha(item: User): void {
    this.userSelect = item;
    //this.detalleA.userElement = item;    
    console.log('Seleccionado: ' + item.username);
  }
  
  onSaveUser(item: User) {
    alert('Registrado ' + item.username + '.');
    console.log('Se han grabado los datos de ' + item.username + '.');
  }
}
