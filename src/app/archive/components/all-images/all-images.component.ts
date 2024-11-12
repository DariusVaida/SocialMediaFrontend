import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from "../../../core/types";
import {Post} from "../../../core/types/post.type";

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent {
  @Input() posts: Post[] = [];
  @Input() isAuthenticated = false;
  @Output() press: EventEmitter<Post> = new EventEmitter;

  onPress(post : Post|null|undefined): void{
    // @ts-ignore
    this.press.emit(post);
  }


  protected readonly event = event;
}
