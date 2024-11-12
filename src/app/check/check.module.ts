import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { CheckScreenComponent } from './containers';
import { ButtonComponent } from "../shared/components/button/button.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { NewImagesComponent } from "./components";
import { CheckService } from "./services";
import { CheckRepository } from "./repositories";
import { DialogComponent } from "../shared/components/dialog/dialog.component";

@NgModule({
  declarations: [
    CheckScreenComponent,
    NewImagesComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    MenuComponent,
    MatIconModule,
    DialogComponent
  ],
  providers: [DatePipe, CheckService, CheckRepository]
})
export class CheckModule { }
