import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface userCredintial {
  email: string;
  password: string;
}

interface loginResponseDTO {
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
  isLoggedin$ = new BehaviorSubject(false);
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
    return this._http
      .post<loginResponseDTO>(this.rootUrl + '/login', userCredintial)
      .pipe(
        tap(() => {
          this.isLoggedin$.next(true);
        })
      );
  }
}
