import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() placeholder = '';
  @Input() inputTitle = '';
  @Input() required = false;
  @Input() fieldTextType = true;
  @Input() name = '';
  @Input() formControlName: string | null | undefined = '';
  @Input() form: FormGroup = new FormGroup<any>({});
}
