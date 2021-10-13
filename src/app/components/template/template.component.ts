import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  template: `
    <div class="card w-50 p-3">
      <form
        action=""
        autocomplete="off"
        #forma="ngForm"
        (submit)="sendData(forma)"
      >
        <label for="name">Nombre:</label>
        <input
          #nameModel="ngModel"
          [ngModel]="person.name"
          [class.is-invalid]="nameModel.invalid && nameModel.touched"
          [class.is-valid]="nameModel.valid && nameModel.touched"
          type="text"
          id="name"
          name="name"
          class="form-control mb-3"
          minlength="3"
          maxlength="20"
          required
        />
        <label for="lastname">Apellido:</label>
        <input
          #lastnameModel="ngModel"
          [ngModel]="person.lastname"
          [class.is-invalid]="lastnameModel.invalid && lastnameModel.touched"
          [class.is-valid]="lastnameModel.valid && lastnameModel.touched"
          type="text"
          id="lastname"
          name="lastname"
          class="form-control mb-3"
          required
          minlength="3"
          maxlength="20"
        />
        <label for="email">Email:</label>
        <input
          #emailModel="ngModel"
          [ngModel]="person.email"
          [class.is-invalid]="emailModel.invalid && emailModel.touched"
          [class.is-valid]="emailModel.valid && emailModel.touched"
          type="email"
          id="email"
          name="email"
          class="form-control mb-3"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"
        />
        <button type="submit" class="btn btn-outline-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  `,
  styles: [],
})
export class TemplateComponent implements OnInit {
  constructor() {}

  person = {
    name: 'Brayan',
    lastname: '',
    email: '',
  };
  ngOnInit(): void {}

  sendData({ form }: NgForm) {
    console.log(form.value);
  }
}
