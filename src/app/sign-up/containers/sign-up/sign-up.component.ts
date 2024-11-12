import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { CountriesService } from "../../services";
import { SignUpService } from "../../services";
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  protected countries = [''];
  protected states = [''];
  protected cities = [''];
  protected selectedCountry = '';
  protected selectedState = '';
  protected selectedCity = '';

  public userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(public dialog: MatDialog,
              private router: Router,
              private countriesApi: CountriesService,
              private signUpService: SignUpService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.countriesApi.getCountries().subscribe((countries: string[]) => this.countries = countries);
  }

  getSelectedCountry(selectedCountry: string){
    this.selectedCountry = selectedCountry;
    this.countriesApi.getStatesByCountry(this.selectedCountry).subscribe((states: string[]) => this.states = states);
    this.countriesApi.getCitiesByCountry(this.selectedCountry).subscribe((cities: string[]) => this.cities = cities);

  }
  getSelectedState(selectedState: string){
    this.selectedState = selectedState;
  }
  getSelectedCity(selectedCity: string) {
    this.selectedCity = selectedCity;
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }

  goToSuccess() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      const newUser = {username: userData.username, email: userData.email, password: userData.password};

      this.signUpService.createUser(newUser).subscribe(
        (response: any) => {
          this.router.navigate(['login']);
          this.openDialog("Account successfully created.");
        },
        (error: any) => {
          this.openDialog("An account with this email already exists.");
        }
      );
    }
    else if (this.userForm.get('name')?.invalid
      || this.userForm.get('password')?.invalid) {
      this.openDialog("Complete all fields.");
    }
    else if (this.userForm.get('email')?.invalid) {
        this.openDialog("Provide a valid email.");
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  get name() {
    return this.userForm.get('name')?.value;
  }

  get email() {
    return this.userForm.get('email')?.value;
  }

  get password() {
    return this.userForm.get('password')?.value;
  }
}
