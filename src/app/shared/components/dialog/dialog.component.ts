import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  protected dialogText = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { dialogText: string }) {
    this.dialogText = data.dialogText;
  }
}
