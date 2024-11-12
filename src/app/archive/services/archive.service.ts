import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {ArchiveRepository} from "../repositories";
import {Like} from "../../core/types";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../core/types/post.type";
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  constructor(private archiveRepository: ArchiveRepository, private http: HttpClient) {
  }

  private backendApi = 'http://localhost:8088';

  getPosts(): Observable<Post[]> {
    const response = this.archiveRepository.getPosts()
    console.log(JSON.stringify(response,null,2))
    return response
  }

  createLike(like: Like) {
    return this.archiveRepository.postLike(like);
  }

  getLikedPostsByUser(userId: any) {
    return this.archiveRepository.getLikedPostsByUser(userId).pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }
}
