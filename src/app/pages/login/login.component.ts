import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // need to more validation in user unputs
  formLogin = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    if (this.formLogin.valid) {
      this._authService.logIn(this.formLogin.value).subscribe(
        (resp) => {
          let token = resp.token;
          localStorage.setItem('token', token);
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
          if (!error.status) {
            this.formLogin.setErrors({ noConnection: true });
          } else {
            this.formLogin.setErrors({ unKnownError: true });
          }
        }
      );
    }
  }
}
