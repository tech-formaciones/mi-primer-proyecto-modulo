import { Component, OnInit } from '@angular/core';
import { User } from './../../data/user.model';
import data from './../../data/data.json';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit {
  usersList: Array<User> | undefined;

  constructor() {
    console.log('Ejecutando el constructor ...');
    this.usersList = data as Array<User>;
  }

  ngOnInit(): void {
    console.log('Componente Maestro, iniciado.');
  }
}
