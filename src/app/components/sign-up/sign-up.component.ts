import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  inProduction = environment.production;
  messageError!: string;
  formSignUp = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
    ]),
  });
  constructor(private _taskService: TaskService, private _route: Router) {}

  ngOnInit(): void {}
  register() {
    // call sign up end point to register the user

    this._taskService.signup(this.formSignUp.value).subscribe(
      (data) => {
        this._route.navigate(['']);
      },
      ({ error }) => {
        this.messageError = error.message;
        // console.log(error.error.message);
      }
    );
  }
}
