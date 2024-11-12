import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Like } from "../../core/types";
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class ArchiveRepository {
  private backendApi = 'http://localhost:8088';

  constructor(private http: HttpClient,
              private httpService: HttpService){}

  getPosts(){
   return this.httpService.getRequestArray(`${this.backendApi}/posts`)
  }

  postLike(like: Like) {
    const userId = like.userId
    const postId = like.postId

    const body = {userId , postId}

    return this.httpService.postRequest(`${this.backendApi}/api/users/like`, body);
  }

  getLikedPostsByUser(userId: any){
    return this.httpService.getRequestArray(`${this.backendApi}/api/users/liked/${userId}`)
  }
}
