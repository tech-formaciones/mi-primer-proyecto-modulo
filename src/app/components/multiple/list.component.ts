import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-multiple-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @Input() usuarios: Array<User> | undefined;
  @Output() eventSelectUser = new EventEmitter();

  constructor() {
      this.usuarios = new Array<User>();
  }

  editUser(usuario: User) {
      this.eventSelectUser.emit(usuario);
      console.log('Editar ' + usuario.firstname + ' ' + usuario.lastname);
  }

  ngOnInit() {
  }
}
