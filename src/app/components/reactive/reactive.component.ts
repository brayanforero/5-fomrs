import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [],
})
export class ReactiveComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private validService: ValidationsService
  ) {
    this.forma.reset({
      name: '',
      lastname: '',
      email: 'test@gmail.com',
      address: {
        district: 'Colón',
        street: 'street #1',
      },
    });
  }

  forma: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        this.validService.notHerrera,
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,3}$'),
      ],
    ],
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      [this.validService.existsUsername],
    ],
    address: this.fb.group({
      district: ['Colón', [Validators.required, Validators.minLength(5)]],
      street: ['street #1-25', Validators.required],
    }),
    pasatiempos: this.fb.array([]),
  });
  ngOnInit(): void {}

  submit() {
    if (this.forma.invalid)
      return Object.values(this.forma.controls).forEach((c) =>
        c.markAsTouched()
      );

    console.log(this.forma);
    this.forma.reset();
  }

  get invalidName() {
    return this.forma.get('name')?.invalid && this.forma.get('name')?.touched;
  }

  get invalidLastName() {
    return (
      this.forma.get('lastname')?.invalid && this.forma.get('lastname')?.touched
    );
  }

  get invalidEmail() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

  get invalidUserName() {
    return (
      this.forma.get('username')?.invalid && this.forma.get('username')?.touched
    );
  }

  get invalidDistrict() {
    return (
      this.forma.get('address.district')?.invalid &&
      this.forma.get('address.district')?.touched
    );
  }

  get invalidStreet() {
    return (
      this.forma.get('address.street')?.invalid &&
      this.forma.get('address.street')?.touched
    );
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  deleteControl(i: number) {
    this.pasatiempos.removeAt(i);
  }

  add() {
    this.pasatiempos.push(this.fb.control(['']));
  }
}
