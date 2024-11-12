import { Component, OnInit } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import {interval, Observable, startWith, switchMap} from "rxjs";
import { Image } from "../../../core/types";
import { CheckService } from "../../services";
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";
import {Post} from "../../../core/types/post.type";

@Component({
  selector: 'app-check-screen',
  templateUrl: './check-screen.component.html',
  styleUrls: ['./check-screen.component.css']
})
export class CheckScreenComponent implements OnInit {
  protected images: Image[] = [];
  protected posts: Post[] = [];
  protected loading = true;
  protected isPosts = false;

  constructor (private checkService: CheckService,
               private dialog: MatDialog) {}

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.checkService.getPosts())
      )
      .subscribe(
        (posts: any) => {
          this.posts = posts
            .map((post: any) => post)
            // .filter((image: any) => );
          this.isPosts = this.posts.length !== 0;
        },
        (error: any) => {
          console.error('Error adding images:', error);
        }
      );

    this.loading = false;
  }


  deletePost(post:Post) {
    this.checkService.deletePost(post.id).subscribe(
      (images: any) => {
        this.openDialog("Image successfully deleted.")
      },
      (error: any) => {}
    );
  }


  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }
}
