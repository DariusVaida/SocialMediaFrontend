import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    NgForOf
  ],
  styleUrls: ['./form-dropdown.component.css']
})
export class FormDropdownComponent {
  @Input() inputTitle = '';
  @Input() placeholder = '';
  @Input() list = [''];
  @Input() name = '';
  @Output() selectedItem = new EventEmitter<string>();

  protected selection = new FormControl();

  changeItem() {
    this.selectedItem.emit(this.selection.value);
  }
}
