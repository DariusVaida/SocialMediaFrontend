import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../shared/components/dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard {

  constructor(public dialog: MatDialog) {}
  canActivate() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isAuthenticated = !!currentUser.id;

    if (!isAuthenticated) {
      this.openDialog("You should be logged in.");
    }

    return isAuthenticated;
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }
}
