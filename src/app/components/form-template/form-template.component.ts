import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {
  user : User;

  constructor() {
    this.user = new User();
  }

  onSumit(form: NgForm) {
    let password = form.value.password;
    let password2 = form.value.password2;

    if(password != password2)
      form.controls['password2'].setErrors({ passwordMismatch: true });
  }
}
