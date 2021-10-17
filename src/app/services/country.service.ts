import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private URL: string = 'https://restcountries.com';
  private VERSION: string = 'v3.1';
  private LANG: string = 'lang/spa';
  constructor(private http: HttpClient) {}

  async getCountries() {
    // return this.http.get(`${this.URL}/${this.VERSION}/${this.LANG}`);
    try {
      const res = await fetch(`${this.URL}/${this.VERSION}/${this.LANG}`);
      const data: any[] = await res.json();
      const countries: any[] = data.map((c) => ({
        name: c.name.common,
        code: c.cca3,
      }));
      return countries;
    } catch (err) {
      console.warn(err);
      return [];
    }
  }
}
