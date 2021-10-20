import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

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

  existsUsername(
    control: FormControl
  ): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> {
    if (!control.value) return Promise.resolve(null);

    const ifEquals = control.value.toLowerCase() === 'pepito';

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (ifEquals) {
          return resolve({ existsName: true });
        }
        resolve(null);
        clearTimeout(timer);
      }, 3500);
    });
  }
}
