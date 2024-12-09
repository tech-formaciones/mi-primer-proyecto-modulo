import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private coreService: CoreService) {
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', []],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      password2: ['', [Validators.required]],
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(formGroup: FormGroup) {
    let password = formGroup.get('password')?.value;
    let password2 = formGroup.get('password2')?.value;
    
    return password === password2 ? null : { notMatching: true };
  }

  onSumit() {
    if(this.formulario.valid) {
      // Si el formulario es valido se procesa
      console.log(this.formulario);    
      console.log(this.formulario.value);      
    }
  }
}

// export function UsernameExistsValidator(coreService: CoreService): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     let username = control.get('username')?.value;

//     // valor vacio, evito realizar consultas
//     if(!username) return of(null);

//     // si contiene datos, realizamos la consulta
//     let result: boolean = coreService.checkUsernameExists(username);
//     if(result) return { usernameExists: true }
//     else return null;

//     //return coreService.checkUsernameExists(username).pipe(
//     //  map((result: boolean) => (result ? { usernameExists: true } : null)));
//   };
// }
