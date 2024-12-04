import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-multiple-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  @Input() usuario: User;

  constructor() {
      this.usuario = new User();
  }

  ngOnInit() {
  }
}
