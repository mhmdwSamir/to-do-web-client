import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: BehaviorSubject<boolean>;
  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedin$;
  }

  ngOnInit(): void {}

  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.authService.isLoggedin$.next(false);
  }
}
