import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  testNumber: number = 10;

  constructor() { }

  testService1 () { }

  testService2 () { }

  testService3 () { }

  // Simula un método que puede chequear el usuario contra una base de datos o APIRest
  checkUsernameExists(username: string): boolean {
    if (username == 'borja') return true;
    else return false;
  }

  isNullOrEmpty(str: string | null | undefined): boolean {
    return str === '' || str === null || str === undefined;
  }
}
