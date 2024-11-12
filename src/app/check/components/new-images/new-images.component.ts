import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from "../../../core/types";

@Component({
  selector: 'app-new-images',
  templateUrl: './new-images.component.html',
  styleUrls: ['./new-images.component.css']
})
export class NewImagesComponent {
  @Input() images: Image[] = [];
  @Output() press: EventEmitter<Image> = new EventEmitter;

  onPress(image: Image): void{
    this.press.emit(image);
  }
}
