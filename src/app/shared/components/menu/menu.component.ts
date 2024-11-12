import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    ButtonComponent,
    NgIf
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  @Input() isAdmin = false;

  protected showMenu = true;

  constructor(private router: Router,
              private dialog: MatDialog){}

  // ngOnChanges(changes: SimpleChanges) {
  //
  // }

  toHome(): void {
    this.showMenu = false;
    this.router.navigate(['home']);
  }

  toCheck(): void {
    this.showMenu = false;
    this.router.navigate(['check']);
  }

  toProfile(): void {
    this.showMenu = false;
    this.router.navigate(['profile']);
  }

  toArchive(): void {
    this.showMenu = false;
    this.router.navigate(['archive']);
  }

  toSignUp(): void {
    this.showMenu = false;
    this.router.navigate(['sign-up']);
  }

  toLogIn(): void {
    this.showMenu = false;
    this.router.navigate(['login']);
  }

  toLogOut(): void {
    this.showMenu = false;
    localStorage.removeItem('currentUser');
    this.openDialog("Successfully logged out.");
    this.router.navigate(['home']);
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }
}
