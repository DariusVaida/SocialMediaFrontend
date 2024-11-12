import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../http.service";
import {Post} from "../../core/types/post.type";

@Injectable({
  providedIn: 'root'
})
export class ProfileRepository {
  private backendApi = 'http://localhost:8088';


  constructor(private http: HttpClient,
              private httpService: HttpService) {
  }

  getImagesByUserId(userId: any) {
    return this.http.get(`${this.backendApi}/images/${userId}`);
  }

  postImage(image: FormData, currentPost: string | null) {



    if (currentPost) {

      const postParsed = JSON.parse(currentPost);
      const postId = postParsed.id;

      const jsonPostId = JSON.stringify(postId);

      image.append('postId',jsonPostId);



      return this.httpService.postRequest(`${this.backendApi}/photo/uploadFile`, image);
    }
    return null;
  }


  createPost(postData: Post) {

    const user = localStorage.getItem("currentUser");
    if (user) {
      const currentUser = JSON.parse(user);
      const userId = currentUser.id;

      const name = postData.name;
      const description = postData.description;


      const body = {name, description, userId};


      return this.httpService.postRequest(`${this.backendApi}/posts/create`, body);
    }
    return null;

  }
}
