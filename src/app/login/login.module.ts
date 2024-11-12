import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers';
import { ButtonComponent } from "../shared/components/button/button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormInputComponent } from "../shared/components/form-input/form-input.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { LoginRepository } from "./repositories";
import { LoginService } from "./services";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      CommonModule,
      ButtonComponent,
      ReactiveFormsModule,
      FormsModule,
      FormInputComponent,
      MenuComponent
  ],
  providers: [LoginRepository, LoginService]
})
export class LoginModule { }
