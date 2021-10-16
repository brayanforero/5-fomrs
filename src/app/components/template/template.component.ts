import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
@Component({
  selector: 'app-template',
  templateUrl: 'template.component.html',
})
export class TemplateComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  person = {
    name: '',
    lastname: '',
    email: '',
    country: '',
  };

  countries: any[] = [];
  ngOnInit(): void {
    this.countryService.getCountries().then((countries) => {
      console.log(countries);
      countries.unshift({ name: '[Seleccione un país]', code: '' });
      this.countries = countries;
    });
  }
  sendData({ form }: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((ctr) => {
        ctr.markAsTouched();
      });
      return;
    }

    console.log(form.value);
  }
}
