import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Login } from "../../../core/types";
import { LoginService } from "../../services";
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected currentUser = {};

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(
      (user: any) => {
          this.currentUser = user
        }
    );
  }

  goToHomePage() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      if (userData && typeof userData.username === 'string' && typeof userData.password === 'string'){

        const loginData: Login = {
          username: userData.username,
          password: userData.password,
        };

        this.loginService.login(loginData).subscribe(
          (user) => {
            if (user) {
              if (user.admin) {
                this.router.navigate(['check']);
              }
              else {
                this.router.navigate(['archive']);
              }
            }
            else {
              this.openDialog("Wrong email or password.");
            }
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
      }
    }
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
