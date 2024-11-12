import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from "./home/home.module";
import { ButtonComponent } from './shared/components/button/button.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { FormDropdownComponent } from './shared/components/form-dropdown/form-dropdown.component';
import { SignUpModule } from "./sign-up/sign-up.module";
import { LoginModule } from "./login/login.module";
import { ArchiveModule } from "./archive/archive.module";
import { CheckModule } from "./check/check.module";
import { ProfileModule } from "./profile/profile.module";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { DialogComponent } from "./shared/components/dialog/dialog.component";
import { ProfileGuard } from "./profile/profile.guard";
import { SignUpGuard } from "./sign-up/sign-up.guard";
import { LoginGuard } from "./login/login.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    ArchiveModule,
    HomeModule,
    LoginModule,
    SignUpModule,
    CheckModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ButtonComponent,
    ProgressBarComponent,
    FormDropdownComponent,
    DialogComponent,
    AppRoutingModule,
    MenuComponent,
    MatIconModule
  ],
  providers: [
    ProfileGuard,
    SignUpGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon('heart-empty',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/heart-empty.svg')
    );
    this.matIconRegistry
      .addSvgIcon('heart-full',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/heart-full.svg')
      );
    this.matIconRegistry
      .addSvgIcon('delete-empty',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/delete-empty.svg')
      );
    this.matIconRegistry
      .addSvgIcon('delete-full',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/delete-full.svg')
      );
  }
}
