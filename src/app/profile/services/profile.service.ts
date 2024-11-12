import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ProfileRepository } from "../repositories";
import {Post} from "../../core/types/post.type";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private profileRepository: ProfileRepository){}

  getImagesByUserId(userId: any) {
    return this.profileRepository.getImagesByUserId(userId).pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }

  addImage(image: FormData){
    const currentPost = localStorage.getItem("currentPost");
    return this.profileRepository.postImage(image, currentPost);
  }

  createPost(postData: Post){

    // @ts-ignore
    return this.profileRepository.createPost(postData)
      .pipe(map(response => {

        const post: Post = {
          id: response.id,
          name: response.name,
          description: response.description,
          image: null
        };



        localStorage.setItem("currentPost", JSON.stringify(post));
        return post;
      }));
  }
}
