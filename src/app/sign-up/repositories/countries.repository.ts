import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class CountriesRepository {
  private countriesAndStatesApi = 'https://countriesnow.space/api/v0.1/countries/states';
  private countriesAndCitiesApi = 'https://countriesnow.space/api/v0.1/countries';

  constructor(private http: HttpClient){}

  getCountries() {
    return this.http.get(`${this.countriesAndStatesApi}`);
  }
  getStatesByCountry(country: string) {
    return this.http.get(this.countriesAndStatesApi);
  }

  getCitiesByCountry(country: string){
    return this.http.get(`${this.countriesAndCitiesApi}`);
  }
}
