import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from "rxjs";
import {Login, User} from '../../core/types';
import { LoginRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private user$ : Observable<User | null> = this.userSubject.asObservable();

  constructor(private http: HttpClient, private loginRepository: LoginRepository){}

  getUserByEmail(email: any) {
    return this.loginRepository.getUserByEmail(email).pipe(
      map((response: any) => {
          return response;
      })
    );
  }

  // login(credentials: Login) {
  //   return this.loginRepository.login(credentials)
  //     .pipe(map(response => {
  //       this.userSubject.next(user);
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.setToken('token')
  //       return user;
  //     }));
  // }

  login(credentials: Login) {
    return this.loginRepository.login(credentials)
      .pipe(map(response => {
        const token = response.token;

        const user: User = {
          id: response.id,
          username: response.username,
          email: response.email,
          password: null,
          admin: response.roles.includes('ADMIN')
        };

        this.userSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('tokenKey', token);

        return user;
      }));
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$;
  }

  setToken(token: string) {
    this.loginRepository.setToken(token);
  }

  getToken() {
    return this.loginRepository.getToken();
  }
}
