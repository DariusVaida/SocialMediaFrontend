import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Image } from "../../../core/types";
import {Post} from "../../../core/types/post.type";

@Component({
  selector: 'app-liked-images',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent {
  @Input() posts: Post[] = [];
  @Input() isAuthenticated = false;
  @Output() press: EventEmitter<Post> = new EventEmitter;

  onPress(post : Post|null|undefined): void{
    // @ts-ignore
    this.press.emit(post);
  }


  protected readonly event = event;
}
