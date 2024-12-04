import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-multiple-signature',
  standalone: false,
  
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.css'
})
export class SignatureComponent implements OnInit {
  @Input() usuario: User;
  @Input() color: string;

  constructor() {   
    this.usuario = new User();
    this.color = 'black';  
  }

  ngOnInit() {
  }
}
