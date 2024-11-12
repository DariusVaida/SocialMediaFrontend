import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent {
  @Input() images: string[] = [];

}
