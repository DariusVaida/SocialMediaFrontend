import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class CheckRepository {
  private backendApi = 'http://localhost:8088';

  constructor(private http: HttpClient,
              private httpService: HttpService){}

  getPosts(){
    return this.httpService.getRequestArray(`${this.backendApi}/posts`);
  }

  deletePost(postId: any) {
    return this.httpService.deleteRequest(`${this.backendApi}/posts/delete/${postId}`)
  }
}
