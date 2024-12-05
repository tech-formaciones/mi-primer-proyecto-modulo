import { Component, OnInit, ViewChild  } from '@angular/core';
import { DetailComponent } from './detail.component';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

import data from './../../data/dataUser.json';
import { SionoPipe } from '../../pipes/siono.pipe';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-master',
  standalone: false,
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
  providers: []
})
export class MasterComponent implements OnInit {
  usersList: Array<User> | undefined;
  userSelect: User;
  field: string;
  order: 'asc' | 'des';

  demo: boolean;
  demoText: string;
  demoNumber: number;

  currentDate: Date;

  // El código crea una observable llamado time que emite la fecha y hora actual cada segundo utilizando setInterval.
  // Cada vez que pasa un segundo, se genera un nuevo objeto Date y se envía a los suscriptores con observer.next(fecha), 
  // lo que permite recibir la hora actual de manera continua.
  time: any = new Observable((observer) => {
    setInterval(() => {
      let fecha = new Date();
      observer.next(fecha);
    }, 1000);
  });

  // El código usa @ViewChild para obtener una referencia del componente hijo DetailComponent en el componente padre. 
  // detalleA es la propiedad donde se almacenará esta referencia. 
  // El operador ! indica que la propiedad no será null ni undefined en el momento de su uso.
  @ViewChild(DetailComponent) detalleA!: DetailComponent;

  // Igual que la línea anterior, pero obtiene una referencia al elemento o componente con el #detail1 en 
  // el template del componente padre.
  @ViewChild('detail1') detalleB!: DetailComponent;

  constructor(private demosiono: SionoPipe, private core: CoreService) {
    this.usersList = data as Array<User>;
    this.userSelect = new User();
    this.currentDate = new Date();

    this.field = 'lastname';
    this.order = 'asc';

    this.demo = true;
    this.demoText = this.demosiono.transform(this.demo);

    this.core.testNumber = 1000;
    this.demoNumber = this.core.testNumber;

    console.log('Componente Maestro, (constructor).');
  }

  ngOnInit(): void {
    console.log('Componente Maestro, (ngOnInit).');
  }

  onClickFicha(item: User): void {
    this.userSelect = item;       
    console.log('Datos seleccionados. Username: ' + item.username);

    // Código opcinal cuando trabajamos con @ViewChild
    // El código asigna el valor de item a la propiedad userElement del componente o elemento al que se refiere detalleA.
    // this.detalleA.userElement = item; 
  }
  
  onSaveUser(item: User) {
    alert('Registrado ' + item.username + '.');
    console.log('Datos grabados. Username: ' + item.username + '.');
  }

  onSort(colum: string) {
    if(this.field == colum ) {
      if(this.order == 'asc') this.order = 'des';
      else this.order = 'asc';
    } else {
      this.order = 'asc';
      this.field = colum;
    }
  }
}
