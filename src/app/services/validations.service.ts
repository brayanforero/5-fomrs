import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

interface ErrorValidate {
  [s: string]: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  constructor() {}
  notHerrera(control: FormControl): ErrorValidate | null {
    let ifMatch = control.value.toLowerCase() === 'herrera';
    if (ifMatch) return { notHerrra: true };
    return null;
  }
}
