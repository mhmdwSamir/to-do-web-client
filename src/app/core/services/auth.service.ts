import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface userCredintial {
  email: string;
  password: string;
}

export interface loginResponseDTO {
  user: {
    id: string;
    userName: string;
    email: string;
  };
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {}

  checkToken(token: string) {
    return this._http.get(this.rootUrl + '/checkToken', {
      headers: new HttpHeaders({
        authorization: token,
      }),
    });
  }

  logIn(userCredintial: userCredintial) {
    return this._http.post<loginResponseDTO>(
      this.rootUrl + '/login',
      userCredintial
    );
  }
}
