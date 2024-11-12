import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { CheckRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  constructor(private checkRepository: CheckRepository){}

  getPosts() {
    return this.checkRepository.getPosts().pipe(
      map((response: any) => {
        return response.map((post: any) => {
          return post;
        });
      })
    );
  }

  deletePost(postId: any) {
    return this.checkRepository.deletePost(postId);
  }
}
