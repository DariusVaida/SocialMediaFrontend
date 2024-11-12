import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private token = localStorage.getItem("tokenKey");

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  constructor(private http: HttpClient) {
  }

  postRequest(endPoint: string, body: Object) {

    console.log("Received post request for " + endPoint);
    console.log("Request body" + body);

    return this.http.post<any>(endPoint, body, {headers: this.headers});


  }


  getRequest(endPoint: string) {

    return this.http.get(endPoint, {headers: this.headers});
  }

  getRequestArray(endPoint: string) {

    return this.http.get<any[]>(endPoint, {headers: this.headers});
  }

  deleteRequest(endPoint: string) {

    return this.http.delete(endPoint, {headers: this.headers});


  }
}
