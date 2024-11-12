import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {forkJoin, of} from "rxjs";
import { ArchiveService } from "../../services";
import { Like, User } from "../../../core/types";
import { Image } from "../../../core/types";
import {Post} from "../../../core/types/post.type";

@Component({
  selector: 'app-archive-screen',
  templateUrl: './archive-screen.component.html',
  styleUrls: ['./archive-screen.component.css']
})
export class ArchiveScreenComponent implements OnInit {
  protected safeImages: Image[] = [];
  protected posts: Post[] = [];
  protected likedPosts : Post[]=[];
  protected likedImages: string[] = [];
  protected currentUser: User = { id: 0, username: '', email: '', password: '', admin: false };
  protected like: Like = { userId: 0, postId: 0 };
  protected loading = true;
  protected showAll = true;
  protected isAuthenticated = false;

  constructor(private router: Router,
              private archiveService: ArchiveService) {}

  // ngOnInit() {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  //
  //   this.isAuthenticated = !!this.currentUser.id;
  //
  //   if (this.isAuthenticated) {
  //     forkJoin({
  //       allPosts: this.archiveService.getPosts(),
  //       likedImages: this.archiveService.getLikedPostsByUser(this.currentUser.id),
  //     }).subscribe(
  //       ({allPosts, likedImages}) => {
  //         this.posts = allPosts.map((image: any) => ({
  //           ...image,
  //           liked: likedImages.some((likedImage: any) => likedImage === image.url)
  //         }));
  //       },
  //       (error: any) => {
  //         console.error('Error adding images:', error);
  //       }
  //     );
  //   }
  //   else {
  //     this.archiveService.getPosts().subscribe(
  //       (data: Post[]) => {
  //         this.posts = data
  //       },
  //       (error: any) => {
  //         console.error('Error adding images:', error);
  //       }
  //     );
  //   }
  //
  //   this.loading = false;
  // }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.isAuthenticated = !!this.currentUser.id;

    if (this.isAuthenticated) {
      this.loading = true;
      forkJoin({
        allPosts: this.archiveService.getPosts(),
        likedImages: this.archiveService.getLikedPostsByUser(this.currentUser.id),
      }).subscribe(
        ({ allPosts, likedImages }) => {

          this.posts = allPosts.map(post => ({
            ...post,
             }));
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching data:', error);
          return of({ allPosts: [], likedPosts: [] });
        }
      );
    }
    else {
      this.loading = true;
      this.archiveService.getPosts().subscribe(
        (data: Post[]) => {
          this.posts = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching posts:', error);
          this.loading = false;
        }
      );
    }
  }


  changeHeart(post: Post) {
    if (this.currentUser) {
      this.like.userId = this.currentUser.id;
      this.like.postId = post.id;
      this.archiveService.createLike(this.like).subscribe(
        (data: Post[]) => {
          this.posts = data;
          this.loading = false;
        },
        (error: any) => {
          console.error('Create like failed:', error);
        })
    }

    //image.liked = !image.liked;
  }

  showLikedImages() {
    this.archiveService.getLikedPostsByUser(this.currentUser.id).subscribe(
      (posts: Post[]) => {
        this.likedPosts = posts
      },
      (error) => {
        console.error('Error adding liked images:', error);
      }
    );

    this.changeView();
  }

  private changeView() {
    this.showAll = !this.showAll;
  }
}
