import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SignUpRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http: HttpClient, private signUpRepository: SignUpRepository){}

  createUser(user: any){
    localStorage.setItem('currentUser', JSON.stringify(user));
    return this.signUpRepository.postUser(user);
  }
}
