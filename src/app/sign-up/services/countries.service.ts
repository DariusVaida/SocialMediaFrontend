import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CountriesRepository } from "../repositories";

@Injectable({
  providedIn:'root'
})

export class CountriesService {
  constructor(private http: HttpClient,
              private countriesRepository: CountriesRepository){}

  getCountries() {
    return this.countriesRepository.getCountries().pipe(
      map((response: any) => {
        return response.data
          .map((country: {name: string}) => country.name);
      })
    )
  }
  getStatesByCountry(countryName: string) {
    return this.countriesRepository.getStatesByCountry(countryName).pipe(
      map((response: any) => {
        const countryData = response.data.find((country: any) => country.name === countryName);
        return countryData ? countryData.states.map((states: { name: string }) => states.name) : [];
      })
    );
  }

  getCitiesByCountry(countryName: string){
    return this.countriesRepository.getCitiesByCountry(countryName).pipe(
      map((response: any) => {
        const countryData = response.data.find((country: any) => country.country === countryName);
        return countryData ? countryData.cities : [];
      })
    );
  }
}
